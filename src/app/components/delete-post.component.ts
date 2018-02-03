import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

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

  home(): void {
    this.location.back();
  }

  deletePost(): void{
    this.postService.deletePost(this.post.id);
    this.location.back();
  }
}
