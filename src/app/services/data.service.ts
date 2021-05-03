import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { BadInput } from '../common/bad-input';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  constructor( @Inject(String) private url : string, private http: HttpClient) { 

  }

  getAll() {
    return this.http.get(this.url)
    .pipe(catchError(this.handleError));
  }

  create( resource ) {
    return this.http.post( this.url, JSON.stringify( resource) )
      .pipe(catchError(this.handleError));
  }

  update( resource ) {
    return this.http.put(this.url + '/' + resource.id, resource)
      .pipe(catchError(this.handleError));
  }

  delete( id ) {
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
