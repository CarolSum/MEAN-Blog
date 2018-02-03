import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { PostsComponent } from './components/posts.component';
import { AddPostComponent } from './components/add-post.component';
import { ReadPostComponent } from './components/read-post.component';
import { EditPostComponent } from './components/edit-post.component';
import { DeletePostComponent } from './components/delete-post.component';

const routes: Routes = [
  { path: '',  component: PostsComponent },
  { path: 'addPost',   component: AddPostComponent },
  { path: 'readPost/:id', component: ReadPostComponent },
  { path: 'editPost/:id', component: EditPostComponent },
  { path: 'deletePost/:id', component: DeletePostComponent },
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}