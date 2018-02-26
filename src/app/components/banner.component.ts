import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';
 
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { AuthService } from '../services/auth.service';
import { PostSearchService } from '../services/post-search.service';
import { Post } from '../models/post';


@Component({
  selector: 'banner',
  templateUrl: './templates/banner.component.html', 
  styleUrls: ['./css/banner.component.css'],
})

export class BannerComponent implements OnInit {
  user = null;
  isLogin = '';
  searchResult: Observable<Post[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private router: Router,
    private authService: AuthService,
    private postSearchService: PostSearchService
  ){}

  search(term: string): void {
    if(term != null && term != '')
      this.router.navigate(['/search', term]);
  }

  ngOnInit(): void{
    this.isLogin = this.authService.get('isLogin');
    this.user = this.authService.getObject('user');
/*
    this.searchResult = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term
        ? this.postSearchService.search(term)
        : Observable.of<Post[]>([]))
      .catch(err => {
        console.log(err);
        return Observable.of<Post[]>([]);
      });
*/
  }

  SignOut(){
    this.authService.remove('user');
    this.authService.remove('isLogin');
    console.log('signout-signout-signout');
    window.location.href = '/';
    //this.router.navigate(['/']);
  }

}
