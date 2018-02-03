"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var post_service_1 = require("../services/post.service");
require("rxjs/add/operator/switchMap");
var DeletePostComponent = (function () {
    function DeletePostComponent(postService, route, location) {
        this.postService = postService;
        this.route = route;
        this.location = location;
        this.post = {
            id: null,
            title: '',
            text: '',
        };
    }
    DeletePostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.postService.getPost(+params.get('id')); })
            .subscribe(function (post) { return _this.post = post; });
    };
    DeletePostComponent.prototype.home = function () {
        this.location.back();
    };
    DeletePostComponent.prototype.deletePost = function () {
        this.postService.deletePost(this.post.id);
        this.location.back();
    };
    return DeletePostComponent;
}());
DeletePostComponent = __decorate([
    core_1.Component({
        selector: 'delete-post',
        templateUrl: './templates/delete-post.component.html',
    }),
    __metadata("design:paramtypes", [post_service_1.PostService,
        router_1.ActivatedRoute,
        common_1.Location])
], DeletePostComponent);
exports.DeletePostComponent = DeletePostComponent;
//# sourceMappingURL=delete-post.component.js.map