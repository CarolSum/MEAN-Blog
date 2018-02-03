import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { PostsComponent } from './components/posts.component';
import { AddPostComponent } from './components/add-post.component';
import { ReadPostComponent }  from './components/read-post.component';
import { EditPostComponent } from './components/edit-post.component';
import { DeletePostComponent } from './components/delete-post.component';

import { PostService } from './services/post.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ 
    AppComponent,
    PostsComponent,
    AddPostComponent,
    ReadPostComponent,
    EditPostComponent,
    DeletePostComponent,
  ],
  providers: [
    PostService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
