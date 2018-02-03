import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { PostService } from '../services/post.service';
import 'rxjs/add/operator/switchMap';
import { Post } from '../models/post';

@Component({
  selector: 'read-post',
  templateUrl: './templates/read-post.component.html', 
})



export class ReadPostComponent implements OnInit {
  post: Post = {
    id: null,
    title: '',
    text: '',
  };
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private location: Location
  ){}
  ngOnInit(): void{
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postService.getPost(+params.get('id')))
      .subscribe(post => this.post = post);
  }

  goBack(): void {
    this.location.back();
  }
}
