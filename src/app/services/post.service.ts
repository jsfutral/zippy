import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url: string = 'http://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { 

  }

  getPosts() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  createPost( post ) {
    return this.http.post( this.url, JSON.stringify( post) )
      .pipe(catchError(this.handleError));
  }

  updatePost( post ) {
    return this.http.put(this.url + '/' + post.id, post)
      .pipe(catchError(this.handleError));
  }

  deletePost( id ) {
    return this.http.delete(this.url + '/' + id)
    .pipe(catchError(this.handleError));
    
  }

  private handleError( error: Response ) {
    if( error.status === 400)
      return Observable.throw( new BadInput());
    if( error.status === 404)
      return Observable.throw( new NotFoundError());
    return Observable.throw( new AppError());
  }
}
