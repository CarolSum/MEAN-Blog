import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MarkdownModule } from 'angular2-markdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleNotificationsModule } from 'angular2-notifications';

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
import { SearchResultComponent } from './components/search-result.component';
import { PostManageComponent } from './components/post-manage.component';
import { CommentManageComponent } from './components/comment-manage.component';

import { PostService } from './services/post.service';
import { AuthService } from './services/auth.service';
import { PostSearchService } from './services/post-search.service';


import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule
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
    UserPageComponent,
    SearchResultComponent,
    PostManageComponent,
    CommentManageComponent
  ],
  providers: [
    PostService,
    AuthService,
    PostSearchService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
