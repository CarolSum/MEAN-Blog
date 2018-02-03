import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';

import { Post } from '../models/post';

@Component({
  selector: 'all-posts',
  templateUrl: './templates/posts.component.html', 
})



export class PostsComponent implements OnInit{
  posts: Post[] = [];
  constructor(private postService: PostService){}
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

}
