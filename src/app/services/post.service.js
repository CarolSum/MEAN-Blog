"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PostService = (function () {
    function PostService() {
        this.posts = [
            {
                id: 1,
                title: "Lorem ipsum",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            },
            {
                id: 2,
                title: "Sed egestas",
                text: "Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus."
            }
        ];
    }
    PostService.prototype.getPosts = function () {
        return Promise.resolve(this.posts);
    };
    PostService.prototype.getPost = function (id) {
        return this.getPosts().then(function (posts) { return posts.find(function (post) { return post.id === id; }); });
    };
    PostService.prototype.deletePost = function (id) {
        var index = -1;
        this.posts.forEach(function (post, i) {
            if (post.id === id) {
                index = i;
            }
        });
        this.posts.splice(index, 1);
    };
    PostService.prototype.addPost = function (post) {
        post.id = this.posts.length + 1;
        this.posts.push(post);
    };
    return PostService;
}());
PostService = __decorate([
    core_1.Injectable()
], PostService);
exports.PostService = PostService;
//# sourceMappingURL=post.service.js.map