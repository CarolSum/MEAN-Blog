import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location }  from '@angular/common';

import { Post } from '../models/post';

@Component({
  selector: 'search',
  templateUrl: './templates/search-result.component.html', 
  styleUrls: ['./css/search-result.component.css'],
})

export class SearchResultComponent implements OnInit{
  posts: Post[];
  searchTerm: string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
  ){}

  ngOnInit(): void{
    this.route.params.subscribe(params => {
      this.searchTerm = params['term'];
      this.searchPostsByTitle(params['term']);
    })
    
  }

  searchPostsByTitle(term){
    this.http.get<Post[]>('/api/posts?title='+term)
      .subscribe(data => {
        console.log(data);
        this.posts = data;
        this.posts.forEach(function(post, i){
          post.text = post.text.substr(0, 50) + '...';
        })
      });
  }

  goBack(){
    this.location.back();
  }
}
