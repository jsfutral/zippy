import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {
  posts: any[];
  private url: string = 'http://jsonplaceholder.typicode.com/posts';
  createPost( input: HTMLInputElement ) {
    let post = { title: input.value }
    input.value = '';

    this.http.post(this.url, JSON.stringify(post))
    .subscribe(response => {
      this.posts.splice(0, 0, post);
      console.log(response);
    });
  }

  constructor(private http: HttpClient ){
    http.get(this.url)
      .subscribe(response => {
        this.posts = response as any;
      });
  }

  updatePost( post ) {
    this.http.put(this.url + '/' + post.id, post).subscribe(
      response => {
        console.log(response)
      })
  }
}
