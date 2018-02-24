import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'banner',
  templateUrl: './templates/banner.component.html', 
  styleUrls: ['./css/banner.component.css'],
})

export class BannerComponent implements OnInit {
  user = null;
  isLogin = '';

  constructor(
    private router: Router,
    private authService: AuthService
  ){}

  ngOnInit(): void{
    this.isLogin = this.authService.get('isLogin');
    this.user = this.authService.getObject('user');
  }

  SignOut(){
    this.authService.remove('user');
    this.authService.remove('isLogin');
    console.log('signout-signout-signout');
    window.location.href = '/';
    //this.router.navigate(['/']);
  }

}
