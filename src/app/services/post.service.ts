import { Injectable } from '@angular/core';

import { Post } from '../models/post';

@Injectable()
export class PostService {
  posts: Post[] = [
    {
      id: 1,
      title: "Lorem ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      title: "Sed egestas",
      text: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
    }
  ];

  getPosts(): Promise<Post[]> {
    return Promise.resolve(this.posts);
  }

  getPost(id: number): Promise<Post>{
    return this.getPosts().then(posts => posts.find(post => post.id === id));
  }

  deletePost(id: number): void{
    var index = -1;
    this.posts.forEach(function(post,i){
      if(post.id === id){
        index = i;
      }
    })
    this.posts.splice(index, 1);
  }

  addPost(post: Post): void{
    post.id = this.posts.length + 1;
    this.posts.push(post);
  }
}