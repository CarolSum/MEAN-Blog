import { Component } from '@angular/core';
import { Location }  from '@angular/common';

import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'add-post',
  templateUrl: './templates/add-post.component.html', 
})



export class AddPostComponent {
  form:Post = {
    id: null,
    title: '',
    text: '',
  };

  constructor(
    private postService: PostService,
    private location: Location
  ){}

  submitPost(): void{
    this.postService.addPost(this.form);
    this.location.back();
  }
}
