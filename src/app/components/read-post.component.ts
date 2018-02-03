import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { HttpClient } from '@angular/common/http';


import { PostService } from '../services/post.service';
import 'rxjs/add/operator/switchMap';
import { Post } from '../models/post';

@Component({
  selector: 'read-post',
  templateUrl: './templates/read-post.component.html', 
})

export class ReadPostComponent implements OnInit {
  post = {};

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location,
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.getPostDetail(this.route.snapshot.params['id']);
  }

  getPostDetail(id){
    this.http.get('/api/post/'+id).subscribe(data => {
      this.post = data;
      console.log(data);
    });
  }

  goBack(): void {
    this.location.back();
  }
}
