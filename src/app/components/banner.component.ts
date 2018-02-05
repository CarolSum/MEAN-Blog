import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'banner',
  templateUrl: './templates/banner.component.html', 
})

export class BannerComponent implements OnInit {
  user = {};
  isLogin = false;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit(): void{
    this.isLogin = this.authService.checkIfLogin();
    this.user = this.authService.getUser();
  }

}
