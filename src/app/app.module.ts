import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent }  from './app.component';
import { PostsComponent } from './components/posts.component';
import { AddPostComponent } from './components/add-post.component';
import { ReadPostComponent }  from './components/read-post.component';
import { EditPostComponent } from './components/edit-post.component';
import { DeletePostComponent } from './components/delete-post.component';
import { BannerComponent } from './components/banner.component';
import { SignInComponent } from './components/sign-in.component';
import { SignUpComponent } from './components/sign-up.component';
import { UserPageComponent } from './components/user-page.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [ 
    AppComponent,
    PostsComponent,
    AddPostComponent,
    ReadPostComponent,
    EditPostComponent,
    DeletePostComponent,
    BannerComponent,
    SignInComponent,
    SignUpComponent,
    UserPageComponent
  ],
  providers: [
    PostService,
    AuthService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
