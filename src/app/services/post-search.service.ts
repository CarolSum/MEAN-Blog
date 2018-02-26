import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Post }           from '../models/post';
 
@Injectable()
export class PostSearchService {
 
  constructor(private http: HttpClient) {}
 
  search(term: string): Observable<Post[]> {
    return this.http
               .get(`api/posts?title=${term}`)
               .map(response => response as Post[]);
  }
}