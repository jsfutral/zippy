import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})

export class FollowerService extends DataService {
  constructor(http: HttpClient) { 
    super('http://api.github.com/users/mosh-hamedani/followers', http);
  }
}
