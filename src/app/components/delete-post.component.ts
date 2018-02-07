import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../services/post.service';
import 'rxjs/add/operator/switchMap';
import { Post } from '../models/post';

@Component({
  selector: 'delete-post',
  templateUrl: './templates/delete-post.component.html', 
})



export class DeletePostComponent implements OnInit {
  post: Post = {
    id: null,
    title: '',
    text: '',
    userId: '',
  };
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.http.get<Post>('/api/post/'+this.route.snapshot.params['id']).subscribe(data => {
      this.post = data;
      console.log(data);
    });
  }

  home(): void {
    this.location.back();
  }

  deletePost(): void{
    this.http.delete('/api/post/'+this.route.snapshot.params['id']).subscribe();
    this.http.delete('/api/comments/'+this.route.snapshot.params['id']).subscribe();
    this.location.back();
  }
}
