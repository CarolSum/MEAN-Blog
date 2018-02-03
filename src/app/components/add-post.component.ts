import { Component } from '@angular/core';
import { Location }  from '@angular/common';
import { HttpClient } from '@angular/common/http';

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
    private location: Location,
    private http: HttpClient
  ){}

  submitPost(): void{
    //this.postService.addPost(this.form);
    this.http.post('/api/post', {
      title: this.form.title,
      text: this.form.text
    }).subscribe();
    this.location.back();
  }
}
