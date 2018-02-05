import { Component } from '@angular/core';

import { Post } from './models/post';

@Component({
  selector: 'my-app',
  template: `
    <banner></banner>
    <h1>My blog</h1>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/addPost">Add a new post</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
})



export class AppComponent {
  
}
