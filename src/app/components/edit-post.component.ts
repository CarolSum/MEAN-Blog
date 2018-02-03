import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { PostService } from '../services/post.service';
import 'rxjs/add/operator/switchMap';
import { Post } from '../models/post';

@Component({
  selector: 'edit-post',
  templateUrl: './templates/edit-post.component.html', 
})



export class EditPostComponent {
  form: Post = {
    id: null,
    title: '',
    text: '',
  };
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
      .subscribe(post => {
        this.post = post;
        this.form.id = post.id;
        this.form.title = post.title;
        this.form.text = post.text;
      });
  }

  goBack(): void {
    this.location.back();
  }

  editPost(): void{
    this.post.title = this.form.title;
    this.post.text = this.form.text;
    this.location.back();
  }
}
