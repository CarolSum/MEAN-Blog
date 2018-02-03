"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var posts_component_1 = require("./components/posts.component");
var add_post_component_1 = require("./components/add-post.component");
var read_post_component_1 = require("./components/read-post.component");
var edit_post_component_1 = require("./components/edit-post.component");
var delete_post_component_1 = require("./components/delete-post.component");
var routes = [
    { path: '', component: posts_component_1.PostsComponent },
    { path: 'addPost', component: add_post_component_1.AddPostComponent },
    { path: 'readPost/:id', component: read_post_component_1.ReadPostComponent },
    { path: 'editPost/:id', component: edit_post_component_1.EditPostComponent },
    { path: 'deletePost/:id', component: delete_post_component_1.DeletePostComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map