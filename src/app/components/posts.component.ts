import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../services/post.service';

import { Post } from '../models/post';

interface PostsResponse{
  posts: Post[];
}


@Component({
  selector: 'all-posts',
  templateUrl: './templates/posts.component.html', 
})

export class PostsComponent implements OnInit{
  posts: Post[];
  results: string[];

  constructor(
    private postService: PostService,
    private http: HttpClient
  ){}

  ngOnInit(): void{
    this.http.get<Post[]>('/api/posts').subscribe(data => {
      console.log(data);
      this.posts = data;
      this.posts.forEach(function(post, i){
        post.text = post.text.substr(0, 50) + '...';
      })
    });
  }

/*
  ngOnInit(): void{
    this.postService.getPosts().then(posts => {
      let temp: Post[] = [];
      posts.forEach(function(post, i){
        temp.push({
          id: post.id,
          title: post.title,
          text: post.text.substr(0, 50) + '...'
        });
      })
      this.posts = temp;
    });
  }
*/

}
