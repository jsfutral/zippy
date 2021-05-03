import { Component, OnInit } from '@angular/core';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';
import { PostService } from '../services/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];

  ngOnInit() {
    this.service.getPosts()
      .subscribe(response => {
        this.posts = response as any;
      });
  }

  constructor(private service: PostService ){

  }

  createPost( input: HTMLInputElement ) {
    let post = { title: input.value }
    input.value = '';

    this.service.createPost(post)
      .subscribe(
        response => {
          this.posts.splice(0, 0, post);
          console.log(response);
        }, (error: AppError) => {
          if( error instanceof BadInput ) {
            //this.form.setErors(error.OriginalError);
          }
          else {
            throw error;
          }
        });
  }

  updatePost( post ) {
    this.service.updatePost(post).subscribe(
      response => {
        console.log(response)
      });
  }

  deletePost( post ) {
    this.service.deletePost(post.id).subscribe(
      response => {
        let index = this.posts.indexOf(post.id);
        this.posts.splice(index, 1);
      }, (error: AppError) => {
        if( error instanceof NotFoundError )
          alert('This post is already deleted');
        else {
          throw error;
        }
      });
  }
}
