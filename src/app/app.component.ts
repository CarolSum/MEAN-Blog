import { Component } from '@angular/core';

import { Post } from './models/post';

@Component({
  selector: 'my-app',
  template: `
    <banner></banner>
    <router-outlet></router-outlet>
    <simple-notifications [options]="options"></simple-notifications>
  `,
})



export class AppComponent {
  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true
  }  
}
