webpackJsonp([0],{

/***/ 693:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageModule", function() { return PostsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__posts__ = __webpack_require__(697);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostsPageModule = /** @class */ (function () {
    function PostsPageModule() {
    }
    PostsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__posts__["a" /* PostsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__posts__["a" /* PostsPage */]),
            ],
        })
    ], PostsPageModule);
    return PostsPageModule;
}());

//# sourceMappingURL=posts.module.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_posts_service__ = __webpack_require__(348);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PostsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PostsPage = /** @class */ (function () {
    function PostsPage(navCtrl, navParams, postService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.postService = postService;
        this.posts = [];
        this.postService.getPosts().subscribe(function (response) { console.log(response); _this.posts = response; });
    }
    PostsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-posts',template:/*ion-inline-start:"C:\ionic-template\src\pages\posts\posts.html"*/'<!--\n  Generated template for the PostsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n          </button>\n      </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n    \n      <ion-card *ngFor="let p of posts">\n\n        <ion-item>\n          <ion-avatar item-start>\n            <img src="{{p.foto}}">\n          </ion-avatar>\n          <h2>{{p.name}}</h2>\n          <h3>{{p.titulo}}</h3>\n        </ion-item>\n      \n        <img src="{{p.image}}">\n      \n        <ion-card-content>\n          <p>{{p.texto}}</p>\n        </ion-card-content>\n        \n        <ion-row>\n          <ion-col text-center>\n            <button ion-button icon-start clear small>\n              <ion-icon name="thumbs-up"></ion-icon>\n              <div>Curtir</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n            <button ion-button icon-start clear small>\n              <ion-icon name="text"></ion-icon>\n              <div>Comentar</div>\n            </button>\n          </ion-col>\n          <ion-col text-center>\n              <button ion-button icon-start clear small>\n                <ion-icon name="repeat"></ion-icon>\n                <div>Compartilhar</div>\n              </button>\n            </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n                <ion-list>\n                    <ion-item>\n                      <ion-avatar item-start>\n                        <img src="{{p.foto}}">\n                      </ion-avatar>\n                      <ion-input type="text" placeholder="Digite seu comentário"></ion-input>\n                    </ion-item>\n                </ion-list>\n            </ion-col>\n          </ion-row>\n      \n      \n      </ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\ionic-template\src\pages\posts\posts.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_posts_service__["a" /* PostService */]])
    ], PostsPage);
    return PostsPage;
}());

//# sourceMappingURL=posts.js.map

/***/ })

});
//# sourceMappingURL=0.js.map