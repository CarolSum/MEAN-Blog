import { Component } from '@angular/core';

import { Post } from './models/post';

@Component({
  selector: 'my-app',
  template: `
    <banner></banner>
    <router-outlet></router-outlet>
  `,
})



export class AppComponent {
  
}
