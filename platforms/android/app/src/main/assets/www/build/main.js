webpackJsonp([9],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panier_panier__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_share__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, toastCtrl, share) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.share = share;
    }
    HomePage.prototype.cancel = function () {
        this.navCtrl.pop();
    };
    HomePage.prototype.onGoToPanier = function () {
        if (this.share.market.name != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__panier_panier__["a" /* PanierPage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: "You must choose a Supermarket",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\home\home.html"*/'<!--<ion-header>\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>-->\n\n<ion-content class="bg-img"> \n  <div class="main-content"> \n      \n      <div padding text-center class="container-logo">\n          <img src="assets/imgs/logoblack.png">\n      </div>\n      \n      <div padding >\n          <form>\n              <ion-list>\n                      <ion-item padding-right>\n                        <ion-label >{{ \'Supermarket\' | translate }} </ion-label>\n                        <ion-select class="form-select-text" [(ngModel)]="this.share.market.name" [ngModelOptions]="{standalone:true}" >\n                          <ion-option value="Carrefour" >Carrefour</ion-option>\n                          <ion-option value="Monoprix">Monoprix</ion-option>\n                          <ion-option value="Geant">Géant</ion-option>\n                        </ion-select>\n                      </ion-item>\n              </ion-list>\n              <button ion-button class="form btn_conf" block (click)="onGoToPanier()">{{ \'Confirm\' | translate }}</button>\n          </form>  \n      </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_share_share__["a" /* ShareProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forget_forget__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_loading_loading__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};












var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, fmb, loadingProvider, toastCtrl, translateService, fb, fAuth, platform, navParams, afAuth) {
        this.navCtrl = navCtrl;
        this.fmb = fmb;
        this.loadingProvider = loadingProvider;
        this.toastCtrl = toastCtrl;
        this.translateService = translateService;
        this.fb = fb;
        this.fAuth = fAuth;
        this.platform = platform;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.user = new User();
        this.passwordtype = 'password';
        this.passeye = 'eye';
        //this.translateService.get('LOGIN_ERROR').subscribe((value) => {
        //this.loginErrorString = value;
        // })
        this.authForm = this.fmb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            'password': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.email = this.authForm.controls['email'];
        this.password = this.authForm.controls['password'];
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signInWithFacebook = function () {
        if (this.platform.is('cordova')) {
            return this.fb.login(['email', 'public_profile']).then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
                return __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithCredential(facebookCredential);
            });
        }
        else {
            return this.afAuth.auth
                .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.FacebookAuthProvider())
                .then(function (res) { return console.log(res); });
        }
    };
    LoginPage.prototype.moveToHome = function (res) {
        console.log('res', res);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */], { res: res });
    };
    LoginPage.prototype.socialLogin = function (isLogin) {
        var _this = this;
        if (isLogin == "facebook") {
            this.loadingProvider.startLoading();
            var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.FacebookAuthProvider();
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithRedirect(provider).then(function () {
                _this.loadingProvider.startLoading();
                __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().getRedirectResult().then(function (result) {
                    console.log('result', result);
                    _this.moveToHome(result.user);
                    _this.loadingProvider.stopLoading();
                }).catch(function (error) {
                    this.loadingProvider.stopLoading();
                    alert(error.message);
                    console.log('error', error);
                });
                _this.loadingProvider.stopLoading();
            }).catch(function (error) {
                this.loadingProvider.stopLoading();
                alert(error.message);
                console.log('error', error);
            });
            this.loadingProvider.stopLoading();
        }
        else if (isLogin == "google") {
            this.loadingProvider.startLoading();
            var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.GoogleAuthProvider();
            __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().signInWithRedirect(provider).then(function () {
                _this.loadingProvider.startLoading();
                __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth().getRedirectResult().then(function (result) {
                    console.log('result', result);
                    _this.loadingProvider.stopLoading();
                    _this.moveToHome(result.user);
                }).catch(function (error) {
                    this.loadingProvider.stopLoading();
                    alert(error.message);
                    console.log('error', error);
                });
                _this.loadingProvider.stopLoading();
            }).catch(function (error) {
                this.loadingProvider.stopLoading();
                alert(error.message);
                console.log('error', error);
            });
            this.loadingProvider.stopLoading();
        }
        else if (isLogin == "twitter") {
            // this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
            // 	.then(res => {
            // 		 this.moveToHome(res);
            // 	})
            // 	.catch(err => console.log('err',err));
        }
        else if (isLogin == "github") {
            // this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
            // 	.then(res => {
            // 		 this.moveToHome(res);
            // 	})
            // 	.catch(err => console.log('err',err));
        }
    };
    LoginPage.prototype.signInWithFacebook1 = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fAuth.auth
                            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app___default.a.auth.FacebookAuthProvider())];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r, toast, err_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)];
                    case 1:
                        r = _a.sent();
                        if (r) {
                            toast = this.toastCtrl.create({
                                message: "Successfully logged in!",
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                            console.log("Successfully logged in!");
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        toast = this.toastCtrl.create({
                            message: err_1.message,
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        console.error(err_1);
                        console.log("error");
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.signOut = function () {
        this.afAuth.auth.signOut();
    };
    LoginPage.prototype.gotoregister = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    LoginPage.prototype.pass = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
    };
    LoginPage.prototype.presentToast = function (err) {
        var toast = this.toastCtrl.create({
            message: err.message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
    };
    LoginPage.prototype.managePassword = function () {
        if (this.passwordtype == 'password') {
            this.passwordtype = 'text';
            this.passeye = 'eye-off';
        }
        else {
            this.passwordtype = 'password';
            this.passeye = 'eye';
        }
    };
    LoginPage.prototype.forgetpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__forget_forget__["a" /* ForgetPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\login\login.html"*/'<!-- \n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-img"> \n    <div class="main-content"> \n        <div padding text-center class="container-logo">\n            <img src="assets/imgs/logoblack.png">\n        </div>\n        <div text-center class="socialLogin" padding>\n            <button ion-button full class="google" (click)="socialLogin(\'google\')"><ion-icon name="logo-google" style="margin-right: 12px;"></ion-icon>Sign in with Google</button>\n            <button ion-button full class="facebook" (click)="socialLogin(\'facebook\')"><ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon> Sign in with Facebook</button>\n          </div>\n\n\n          <div class="sepretor-or" padding horizontal> <p>Or</p></div>\n\n        <div padding class="container-bottom">\n          <form >\n              <div class="errormsg">\n                  <div *ngIf="email.errors && email.touched">\n                      <p>Email is required.</p>\n                  </div>\n                  <div *ngIf="password.errors && password.touched">\n                      <p>Password is required.</p>\n                  </div>\n              </div>\n              <ion-list>\n                <ion-item padding-right>\n                  <ion-label >\n                    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n                    {{ \'EMAIL\' | translate }}*\n                  </ion-label>\n                  <ion-input type="email" [(ngModel)]="user.email" name="email" required ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label >\n                    <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n                    {{ \'PASSWORD\' | translate }}*</ion-label> \n                  <ion-input type="password" [(ngModel)]="user.password" name="password" type="{{passwordtype}}" required></ion-input>\n                <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n                </ion-item>\n              </ion-list>\n              <button ion-button block class="login" (click)="login()">{{ \'LOGIN_BUTTON\' | translate }}</button>\n              \n         \n            \n            </form>        \n            \n            <div padding text-center class="form-bottom-text" >\n              <a href="javascript:void(0);" (click)="forgetpassword()" >\n                  {{ \'FORGOT_PASSWORD\' | translate }}\n              </a>\n            </div>\n\n            <div padding text-center class="form-bottom-text">\n                <label>{{ \'NO_ACCOUNT\' | translate }} <a href="javascript:void(0);" (click)="gotoregister()">{{ \'SIGNUP\' | translate }}</a></label>\n              </div>\n        </div>\n    </div>\n</ion-content>\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'LOGIN_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-img"> \n    <div class="main-content"> \n        <div padding text-center class="container-logo">\n            <img src="assets/imgs/logoblack.png">\n        </div>\n        <div text-center class="socialLogin" padding>\n            <button ion-button full class="google" (click)="socialLogin(\'google\')">\n              <ion-icon name="logo-google" style="margin-right: 12px;"></ion-icon>\n              {{ \'LOGIN_GOOGLE\' | translate }}\n            </button>\n            <!--<button ion-button full class="facebook" (click)="socialLogin(\'facebook\')">\n              <ion-icon name="logo-facebook" style="margin-right: 12px;"></ion-icon>\n              {{ \'LOGIN_FB\' | translate }}\n            </button>-->\n        </div>\n\n        <div padding class="container-bottom">\n          <form >\n              <div class="errormsg">\n                  <div *ngIf="email.errors && email.touched">\n                      <p>{{ \'EMAIL_REQUIRED\' | translate }}</p>\n                  </div>\n                  <div *ngIf="password.errors && password.touched">\n                      <p>{{ \'PWD_REQUIRED\' | translate }}</p>\n                  </div>\n              </div>\n              <ion-list>\n                <ion-item padding-right>\n                  <ion-label >\n                    <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n                    {{ \'EMAIL\' | translate }}*\n                  </ion-label>\n                  <ion-input type="email" [(ngModel)]="user.email" name="email" required ></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label >\n                    <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n                    {{ \'PASSWORD\' | translate }}*</ion-label> \n                  <ion-input type="password" [(ngModel)]="user.password" name="password" type="{{passwordtype}}" required></ion-input>\n                <button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>\n                </ion-item>\n              </ion-list>\n              <button ion-button block class="login" (click)="login()">{{ \'LOGIN_BUTTON\' | translate }}</button>\n              \n             <!-- <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">Sign In</button>-->\n            \n            </form>        \n            \n            <div padding text-center class="form-bottom-text" >\n              <a href="javascript:void(0);" (click)="forgetpassword()" >\n                  {{ \'FORGOT_PASSWORD\' | translate }}\n              </a>\n            </div>\n\n            <div padding text-center class="form-bottom-text">\n                <label>{{ \'NO_ACCOUNT\' | translate }} <a href="javascript:void(0);" (click)="gotoregister()">{{ \'SIGNUP\' | translate }}</a></label>\n              </div>\n        </div>\n    </div>\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_10__providers_loading_loading__["a" /* LoadingProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_auth__["AngularFireAuth"]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panier_panier__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_share__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_payment__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { RecuePage } from '../recue/recue';
/**
 * Generated class for the ChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChoicePage = /** @class */ (function () {
    function ChoicePage(navCtrl, share, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.share = share;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.banque = { name: null };
        this.carte = { name: null };
    }
    ChoicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChoicePage');
    };
    ChoicePage.prototype.onGoToPanier = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__panier_panier__["a" /* PanierPage */]);
    };
    ChoicePage.prototype.onGoToPayment = function () {
        if (this.share.banque.name != null && this.carte.name != null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__payment_payment__["a" /* PaymentPage */]);
        }
        else {
            var toast = this.toastCtrl.create({
                message: "You must choose a bank and a card",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
    };
    ChoicePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choice',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\choice\choice.html"*/'<ion-header>\n    <ion-navbar>\n      <ion-title>{{ \'Choice\' | translate }}</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="bg-img">\n      <div class="main-content"> \n          <div padding text-center class="container-logo">\n              <img src="assets/imgs/logoblack.png">\n          </div>\n          <div padding >\n              <form>\n                  <ion-list>\n                          <ion-item padding-right>\n                            <ion-label> {{ \'INSTITUTION\' | translate }} </ion-label>\n                            <!--<ion-select  [(ngModel)]="banque.name">-->\n                            <ion-select class="form-select-text" [(ngModel)]=\'this.share.banque.name\' [ngModelOptions]=\'{standalone:true}\' >\n                              <ion-option value="BIAT" >BIAT</ion-option>\n                              <ion-option value="GEANT">Habitat</ion-option>\n                              <ion-option value="UIB">UIB</ion-option>\n                              <ion-option value="STB">STB</ion-option>\n                            </ion-select>\n                            </ion-item>\n                          <ion-item padding-right>\n                            <ion-label >{{ \'CARD\' | translate }} </ion-label>\n                            <!--<ion-select  [(ngModel)]="carte.name">-->\n                            <ion-select [(ngModel)]="carte.name" [ngModelOptions]=\'{standalone:true}\' >\n                              <ion-option value="Visa">Visa</ion-option>\n                              <ion-option value="MasterCard">MasterCard</ion-option>\n                            </ion-select>\n                            </ion-item>\n                          \n                  </ion-list>\n  \n                  <button ion-button clear (click)="onGoToPanier()" >\n                    <div padding class="form-bottom-text"> \n                      <label>{{ \'Cancel\' | translate }}</label>\n                    </div>\n                  </button>\n                  <button ion-button class="btn_conf" (click)="onGoToPayment()">{{ \'Confirm\' | translate }}</button>\n                  <!--\n                  <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">Sign In</button>\n                  -->\n\n              </form>  \n          </div>\n        </div>\n  </ion-content>'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\choice\choice.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ChoicePage);
    return ChoicePage;
}());

//# sourceMappingURL=choice.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_share_share__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






//import { HomePage } from '../home/home';
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, share, navParams, toastCtrl, fAuth) {
        this.navCtrl = navCtrl;
        this.share = share;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.fAuth = fAuth;
        this.user = new User();
    }
    RegisterPage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var r, err_1, toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password).then(function (res) {
                                var user = __WEBPACK_IMPORTED_MODULE_5_firebase__["auth"]().currentUser;
                                user.sendEmailVerification();
                                var toast = _this.toastCtrl.create({
                                    message: "check your mail to verify your account",
                                    duration: 3000,
                                    position: 'top'
                                });
                                toast.present();
                                console.log("Successfully registered!");
                                _this.navCtrl.push('LoginPage');
                            })];
                    case 1:
                        r = _a.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        toast = this.toastCtrl.create({
                            message: "Registration failed",
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                        console.error(err_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\register\register.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'SIGNUP_TITLE\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="bg-img">\n    <div class="main-content">\n        <div padding text-center class="container-logo">\n            <img src="assets/imgs/logoblack.png">\n        </div> \n        <div padding class="container-bottom">\n          <form  >\n            <!--<div class="errormsg">\n                  <div *ngIf="email.errors && email.touched">\n                      <p>Email is required.</p>\n                  </div>\n                  <div *ngIf="password.errors && password.touched">\n                      <p>Password is required.</p>\n                  </div>\n              </div>-->\n              <ion-list>\n                <ion-item padding-right>\n                  <ion-label fixed>\n                      <ion-icon ios="ios-contact" md="md-contact"></ion-icon>\n                      {{ \'NAME\' | translate }}\n                  </ion-label>\n                  <ion-input type="text" [(ngModel)]="user.name" name="name"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label fixed>\n                      <ion-icon ios="ios-mail" md="md-mail"></ion-icon>\n                      {{ \'EMAIL\' | translate }}\n                  </ion-label>\n                  <ion-input type="email" [(ngModel)]="user.email" name="email"></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label >\n                    <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n                    {{ \'PASSWORD\' | translate }}\n                  </ion-label>\n                  <ion-input type="password" [(ngModel)]="user.password" name="password"></ion-input>\n                  <!--<button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>-->\n                </ion-item>\n              </ion-list>\n              <button ion-button block class="login" (click)="register()"> {{ \'SIGNUP_BUTTON\' | translate }}</button>\n              <!--\n              <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">Sign In</button>\n              -->\n          </form>\n          <div padding text-center class="form-bottom-text">\n              <label>{{ \'ACCOUNT\' | translate }} <a href="javascript:void(0);" (click)="login()">{{ \'LOGIN_BUTTON\' | translate }}</a></label>\n          </div>\n        </div>\n    </div>\n    \n</ion-content>\n\n\n'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["AngularFireAuth"]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuantityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__panier_panier__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_share__ = __webpack_require__(38);
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
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuantityPage = /** @class */ (function () {
    function QuantityPage(navCtrl, share, navParams) {
        this.navCtrl = navCtrl;
        this.share = share;
        this.navParams = navParams;
        this.item = navParams.get('data');
    }
    QuantityPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuantityPage');
    };
    QuantityPage.prototype.cancel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__panier_panier__["a" /* PanierPage */]);
    };
    QuantityPage.prototype.onGoToHome = function () {
        var index = this.share.items.lastIndexOf(this.item);
        console.log("index is : " + index);
        this.share.items[index].myQuantity = this.share.myQuantity;
        this.share.prix += this.item.prix * (this.item.myQuantity - 1);
        this.share.myQuantity = 1;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__panier_panier__["a" /* PanierPage */]);
    };
    QuantityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quantity',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\quantity\quantity.html"*/'<!--\n  Generated template for the QuantityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n\n<ion-header>\n\n    <ion-navbar>\n      <ion-title>quantity</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-icon id="icon"  name="cart"  ></ion-icon>\n    <ion-item>\n      <ion-input type="number" placeholder="quantité" [(ngModel)]="this.share.myQuantity" min=1 ></ion-input>\n    </ion-item>\n    \n  </ion-content>\n  <ion-footer>\n     <button ion-button id="icon_check" (click)="onGoToHome()"><ion-icon  name="checkmark-circle" color="#4cd137"></ion-icon></button>\n     <button ion-button id="icon_back" (click)="onGoToHome()"><ion-icon  name="backspace" color="#4cd137"></ion-icon></button>\n  \n  </ion-footer>\n  \n  <ion-header>\n    <ion-navbar>\n      <ion-title>\n        Quantity\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="bg-img">\n      <div class="main-content"> \n          <div padding text-center class="container-logo">\n              <img src="assets/imgs/logoblack.png">\n          </div>\n          <div padding class="container-bottom">\n              <form>\n                  <ion-list>\n                    <ion-item padding-right>\n                        <ion-label>QUANTITY</ion-label>\n                        <ion-input type="number" placeholder="Quantity" [(ngModel)]="this.share.myQuantity" min=1 ></ion-input>\n                    </ion-item>\n                  </ion-list>\n  \n                  <button ion-button clear class="btn_can" (click)="cancel()">\n                    <div padding class="form-bottom-text"> \n                      <label>Cancel</label>\n                    </div>\n                  </button>\n                  <button ion-button class="btn_conf" (click)="onGoToHome()">Confirm</button>\n                  \n                  \n              </form>  \n          </div>\n        </div>\n  </ion-content>\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>\n        {{ \'QUANTITY\' | translate }}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-img">\n    <div class="main-content"> \n        <div class="splash-logo">\n            <div padding text-center class="container-logo">\n                <img src="assets/imgs/logo.png">\n            </div>\n        </div>\n        <div padding class="container-bottom">\n            <form>\n                <ion-list>\n                  <ion-item padding-right>\n                      <ion-label>{{ \'QUANTITY\' | translate }}</ion-label>\n                      <ion-input type="number" placeholder="Quantity" [(ngModel)]="this.share.myQuantity" [ngModelOptions]="{standalone:true}" min=1 ></ion-input>\n                  </ion-item>\n                </ion-list>\n\n                <button ion-button clear class="btn_can" (click)="cancel()">\n                  <div padding class="form-bottom-text"> \n                    <label>{{ \'Cancel\' | translate }}</label>\n                  </div>\n                </button>\n                <button ion-button class="btn_conf" (click)="onGoToHome()">{{ \'Confirm\' | translate }}</button>\n                \n                \n            </form>  \n        </div>\n      </div>\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\quantity\quantity.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], QuantityPage);
    return QuantityPage;
}());

//# sourceMappingURL=quantity.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choice_choice__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recue_recue__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_share__ = __webpack_require__(38);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, toastCtrl, share, navParams) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.share = share;
        this.navParams = navParams;
        this.carte_code = null;
        this.code = null;
        this.itemR = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/banque');
        this.itemRef = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.database().ref('/achat');
    }
    PaymentPage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.onGoToChoice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__choice_choice__["a" /* ChoicePage */]);
    };
    PaymentPage.prototype.addItem = function (newliste, prix) {
        this.itemRef.push(this.share.items);
        this.itemRef.push({ liste_produit: newliste,
            prix: prix
        });
    };
    PaymentPage.prototype.onGoToRecue = function () {
        this.addItem(this.share.items, this.share.prix);
        this.createCode();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__recue_recue__["a" /* RecuePage */]);
    };
    PaymentPage.prototype.test = function () {
        if (this.carte_code.toString().length != 12 || this.code.toString().length != 8) {
            var toast = this.toastCtrl.create({
                message: "check your information please!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (this.carte_code == null || this.code == null) {
            {
                var toast = this.toastCtrl.create({
                    message: "carte number and password are required!",
                    duration: 3000,
                    position: 'top'
                });
                toast.present();
                return false;
            }
        }
        return true;
    };
    PaymentPage.prototype.check = function () {
        if (this.carte_code.toString().length != 12 || this.code.toString().length != 8) {
            var toast = this.toastCtrl.create({
                message: "check your information please!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (this.carte_code == null || this.code == null) {
            var toast = this.toastCtrl.create({
                message: "carte number and password are required!",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            return false;
        }
        if (this.carte_code == 123456789123 && this.code == 12345678) {
            var toast = this.toastCtrl.create({
                message: "successfully authenticated",
                duration: 3000,
                position: 'top'
            });
            toast.present();
            this.onGoToRecue();
        }
        else {
            var toast = this.toastCtrl.create({
                message: "wrong card number or password",
                duration: 3000,
                position: 'top'
            });
            toast.present();
        }
        /* else {
     
         this.itemR.on('value', itemSnapshot => {
           
           itemSnapshot.forEach( itemS => {
             if(itemS.val().carte_code==this.carte_code){
              
               let toast = this.toastCtrl.create({
                 message: "successfully authenticated",
                 duration: 3000,
                 position: 'top'
               });
               toast.present();
               this.onGoToRecue();
             return false;
              
       }
       
         })
       });
       
     
     
        
     }*/
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\payment\payment.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'PAYMENT\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-img"> \n    <div class="main-content"> \n        <div padding text-center class="container-logo">\n            <img src="assets/imgs/logoblack.png">\n        </div>\n        <div padding class="container-bottom">\n          <form>\n              <!--<div class="errormsg">\n                  <div *ngIf="card.errors && card.touched">\n                      <p>Card number is required.</p>\n                  </div>\n                  <div *ngIf="password.errors && password.touched">\n                      <p>Password is required.</p>\n                  </div>\n              </div>-->\n              <ion-list>\n                <ion-item padding-right>\n                  <ion-label >\n                    <ion-icon ios="ios-card" md="md-card"  ></ion-icon>\n                    <!--{{ \'Card Number\' | translate }}-->\n                    {{ \'NUMBER\' | translate }}\n                  </ion-label>\n                  <ion-input type="number" name="Card number" [(ngModel)]=\'carte_code\' [ngModelOptions]=\'{standalone:true}\'></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label >\n                    <ion-icon ios="ios-unlock" md="md-unlock"></ion-icon>\n                    {{ \'PASSWORD\' | translate }}</ion-label> \n                  <ion-input type="password" name="password" [(ngModel)]=\'code\' [ngModelOptions]=\'{standalone:true}\'></ion-input>\n                <!--<button ion-button clear class="eye-icon-btn" type="button" item-right (click)="managePassword()"><ion-icon name="{{passeye}}"></ion-icon></button>-->\n                </ion-item>\n              </ion-list>\n              <button ion-button block class="btn_conf"(click)="check()">{{ \'Confirm\' | translate }}</button>\n\n              <button ion-button clear block class="btn_can">\n                  <div padding class="form-bottom-text" (click)="onGoToChoice()"> \n                    <label> {{ \'Cancel\' | translate }}</label>\n                  </div>\n                </button>\n              <!--\n              <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">Sign In</button>\n              -->\n            </form> \n        </div>\n    </div>\n</ion-content>\n\n  '/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\payment\payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_5__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PaymentPage);
    return PaymentPage;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecuePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_share_share__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { HomePage } from '../home/home';
/**
 * Generated class for the RecuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RecuePage = /** @class */ (function () {
    function RecuePage(navCtrl, share, navParams, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.share = share;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.qrData = "HSDBHSDF";
        this.createdCode = null;
        this.scannedCode = null;
        this.name_m = null;
        this.myDate = new Date().toISOString();
    }
    RecuePage.prototype.Ctrl = function ($scope) {
        $scope.date = new Date();
    };
    RecuePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RecuePage');
    };
    RecuePage.prototype.createCode = function () {
        this.createdCode = this.qrData;
    };
    RecuePage.prototype.cancel = function () {
        this.share.items = [];
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    RecuePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-recue',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\recue\recue.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'RECEIPT\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-img"> \n<div class="main-content"> \n    <div padding text-center class="container-logo">\n        <img src="assets/imgs/logoblack.png">\n    </div>\n\n  <div padding >\n      <form>\n          <ion-card id="recu">\n              \n                  <h2 padding>{{ \'THX\' | translate }}</h2>\n                <h2 padding>{{ \'SUCCESS\' | translate }}</h2>\n                <!--<p padding-left>item date </p>-->\n\n                <p padding-left>{{"Supermarket" | translate}} : {{this.share.market.name}}</p> \n                <p padding-left>{{ \'TOTAL\' | translate }}: {{this.share.market.name}}</p> \n              <ion-card-content>\n                <h4 padding>\n                    {{ \'FIND_QR\' | translate }}\n                </h4>\n              </ion-card-content>\n          </ion-card> \n          <ion-card id="recu" *ngIf="qrData">\n            <p>QR code</p>\n            \n            <ngx-qrcode [qrc-value]="qrData"></ngx-qrcode>\n            \n          </ion-card>\n      </form>      \n  </div>\n</div>\n<!--<button ion-fab center bottom> <ion-icon name="close"  ></ion-icon></button>-->\n<form>\n  <button ion-button full color="dark" (click)="cancel()"> {{ \'BACK_HOME\' | translate }}</button>\n</form>\n\n</ion-content>\n\n<ion-footer>\n<!--<button ion-fab id="bttn" bottom color=danger (click)="cancel()" > <ion-icon name="close"  ></ion-icon>\n</button>-->\n\n\n</ion-footer>\n'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\recue\recue.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], RecuePage);
    return RecuePage;
}());

//# sourceMappingURL=recue.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ForgetPage = /** @class */ (function () {
    function ForgetPage(navCtrl, navParams, fb, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.afAuth = afAuth;
        this.toast = toast;
        this.forgetData = { email: '' };
        this.authForm = this.fb.group({
            'email': [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
        });
        this.email = this.authForm.controls['email'];
        this.fireAuth = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth();
    }
    ForgetPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgetPage');
    };
    ForgetPage.prototype.forgetPassword = function (email) {
        var _this = this;
        this.resetPassword(email)
            .then(function (result) {
            _this.toast.create({
                message: 'Link was send successfully!',
                duration: 3000,
                position: 'top'
            }).present();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        }, function (error) {
            _this.toast.create({
                message: error.message,
                duration: 5000,
                position: 'top'
            }).present();
        });
    };
    ForgetPage.prototype.resetPassword = function (email) {
        return this.afAuth.auth.sendPasswordResetEmail(email);
    };
    ForgetPage.prototype.moveToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    ForgetPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forget',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\forget\forget.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{ \'RESET_PASSWORD\' | translate }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-img">\n    <div class="main-content">\n      <div padding text-center class="container-logo" margin-bottom >\n        <img src="assets/imgs/logoblack.png">\n      </div>\n      <div padding text-center class="form-bottom-text">\n        <h3> {{ \'RESET_PASSWORD\' | translate }}</h3>\n        <label>{{ \'RESET_MESSAGE\' | translate }}</label>\n      </div>\n      <div text-center class="socialLogin" padding></div>\n        <div padding style="width: 100%;">\n        <form [formGroup]="authForm" (ngSubmit)="forgetPassword(forgetData.email)">\n  \n          <div class="errormsg">\n            <div *ngIf="email.errors && email.touched"><p>{{ \'EMAIL_REQUIRED\' | translate }}</p></div>\n          </div>\n  \n          <ion-list>\n            <ion-item >\n              <ion-label><ion-icon ios="ios-mail" md="md-mail"></ion-icon></ion-label>\n              <ion-input [(ngModel)]="forgetData.email" [formControl]="email" id="email" type="email" required placeholder="Email *"></ion-input>\n            </ion-item>\n          </ion-list>\n          <button type="submit" ion-button full color="dark" [disabled]="!authForm.valid">{{ \'SEND\' | translate }}</button>\n        </form>\n      </div>\n    </div>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\forget\forget.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ForgetPage);
    return ForgetPage;
}());

//# sourceMappingURL=forget.js.map

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 248;

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/choice/choice.module": [
		637,
		8
	],
	"../pages/forget/forget.module": [
		638,
		7
	],
	"../pages/login/login.module": [
		639,
		6
	],
	"../pages/panier/panier.module": [
		640,
		5
	],
	"../pages/payment/payment.module": [
		641,
		4
	],
	"../pages/quantity/quantity.module": [
		642,
		3
	],
	"../pages/recue/recue.module": [
		643,
		2
	],
	"../pages/register/register.module": [
		644,
		1
	],
	"../pages/welcome/welcome.module": [
		645,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 291;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(591);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingProvider = /** @class */ (function () {
    function LoadingProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingProvider.prototype.startLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingProvider.prototype.stopLoading = function () {
        var _this = this;
        setTimeout(function () {
            _this.loading.dismiss();
        }, 100);
    };
    LoadingProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], LoadingProvider);
    return LoadingProvider;
}());

//# sourceMappingURL=loading.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(498);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShareProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ShareProvider = /** @class */ (function () {
    // public items:Array<any> = [];
    function ShareProvider() {
        this.banque = { name: null };
        this.items = [];
        this.myQuantity = 1;
        this.prix = 0;
        this.market = { name: null };
        console.log('Hello ShareProvider Provider');
    }
    ShareProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ShareProvider);
    return ShareProvider;
}());

//# sourceMappingURL=share.js.map

/***/ }),

/***/ 498:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_fire__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_panier_panier__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_share_share__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__ = __webpack_require__(617);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_choice_choice__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_quantity_quantity__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_recue_recue__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_payment_payment__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_login_login__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_forget_forget__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_loading_loading__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























//import { from } from 'rxjs';
var firebaseConfig = {
    apiKey: "AIzaSyB1DoJLuRfjBixhwtkAhnZkbKzlm9cGNQg",
    authDomain: "quickpay-b68c0.firebaseapp.com",
    databaseURL: "https://quickpay-b68c0.firebaseio.com",
    projectId: "quickpay-b68c0",
    storageBucket: "quickpay-b68c0.appspot.com",
    messagingSenderId: "932601026587"
};
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_17__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_panier_panier__["a" /* PanierPage */], __WEBPACK_IMPORTED_MODULE_18__pages_choice_choice__["a" /* ChoicePage */], __WEBPACK_IMPORTED_MODULE_19__pages_quantity_quantity__["a" /* QuantityPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_recue_recue__["a" /* RecuePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_choice_choice__["a" /* ChoicePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_forget_forget__["a" /* ForgetPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15_ngx_qrcode2__["a" /* NgxQRCodeModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/choice/choice.module#ChoicePageModule', name: 'ChoicePage', segment: 'choice', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forget/forget.module#ForgetPageModule', name: 'ForgetPage', segment: 'forget', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/panier/panier.module#PanierPageModule', name: 'PanierPage', segment: 'panier', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quantity/quantity.module#QuantityPageModule', name: 'QuantityPage', segment: 'quantity', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/recue/recue.module#RecuePageModule', name: 'RecuePage', segment: 'recue', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_16__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_22__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */], __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_panier_panier__["a" /* PanierPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_choice_choice__["a" /* ChoicePage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_quantity_quantity__["a" /* QuantityPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_recue_recue__["a" /* RecuePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_payment_payment__["a" /* PaymentPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_choice_choice__["a" /* ChoicePage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_forget_forget__["a" /* ForgetPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__angular_fire_database__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_14__providers_share_share__["a" /* ShareProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_14__providers_share_share__["a" /* ShareProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_loading_loading__["a" /* LoadingProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_share_share__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { WelcomePage } from '../pages/welcome/welcome';
var MyApp = /** @class */ (function () {
    function MyApp(platform, translate, share, config, statusBar, splashScreen) {
        this.translate = translate;
        this.share = share;
        this.config = config;
        this.rootPage = "WelcomePage";
        this.items = [];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        this.initTranslate();
    }
    MyApp.prototype.initTranslate = function () {
        var _this = this;
        // Set the default language for translation strings, and the current language.
        this.translate.setDefaultLang('en');
        var browserLang = this.translate.getBrowserLang();
        if (browserLang) {
            if (browserLang === 'zh') {
                var browserCultureLang = this.translate.getBrowserCultureLang();
                if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
                    this.translate.use('zh-cmn-Hans');
                }
                else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
                    this.translate.use('zh-cmn-Hant');
                }
            }
            else {
                this.translate.use(this.translate.getBrowserLang());
            }
        }
        else {
            this.translate.use('en'); // Set your language here
        }
        this.translate.get(['BACK_BUTTON_TEXT']).subscribe(function (values) {
            _this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */], __WEBPACK_IMPORTED_MODULE_5__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanierPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__choice_choice__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_share_share__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__quantity_quantity__ = __webpack_require__(206);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';


//mport { QuantityPage } from '../quantity/quantity';

//import { AndroidPermissions } from '@ionic-native/android-permissions';




var PanierPage = /** @class */ (function () {
    function PanierPage(navCtrl, toastCtrl, share, navParams, database, barcodeScanner) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.share = share;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.x = 0;
        //public items: Array<any> = [];
        this.itemRef = __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('/market');
        this.scannedCode = null;
        this.share.myQuantity = 1;
    }
    PanierPage.prototype.ionViewDidLoad = function () {
    };
    /*addItem(newName: string,newcode : string,descr: string,prix: string) {
      this.itemRef.push({ produit: newName ,
      code: newcode,
      description: descr,
      prix:prix
  
      });
    }
    updateItem(key: string, newText: string) {
      this.itemsRef.update(key, { text: newText });
    }
    deleteItem(key: string) {
      this.itemsRef.remove(key);
    }
    deleteEverything() {
      this.itemsRef.remove();
    }
    createproduct(name,desc,prix)
    {
      //this.products.push({ name: "couscous"});
  
    }
    /*createCode() {
      this.createdCode = this.qrData;
    }*/
    PanierPage.prototype.scanCode1 = function () {
        var _this = this;
        var itemm;
        this.options = {
            showTorchButton: true
        };
        this.scannedCode = 5126326;
        this.itemRef.on('value', function (itemSnapshot) {
            //this.items = [];
            itemSnapshot.forEach(function (itemSnap) {
                if (itemSnap.val().code == _this.scannedCode) {
                    if (!_this.exist(itemSnap.val())) {
                        // itemSnap.val().myQuantity=this.share.myQuantity;
                        itemm = itemSnap.val();
                        itemm.myQuantity = _this.share.myQuantity;
                        //itemSnap.val().myQuantity=this.share.myQuantity;
                        _this.share.items.push(itemm);
                        // this.navCtrl.push(QuantityPage);
                        // var index=this.share.items.lastIndexOf(itemSnap.val());
                        //this.share.items[this.share.items.length-1].myQuantity=this.share.myQuantity;
                        _this.share.prix += itemSnap.val().prix;
                        _this.share.myQuantity = 1;
                        // if(this.x==0){this.navCtrl.push(PanierPage);this.x++;}
                        return false;
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: "Product already exist just change the quantity",
                            duration: 3000,
                            position: 'top'
                        });
                        toast.present();
                    }
                }
            });
        });
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.scannedCode = Number(barcodeData.text);
        }, function (err) {
            console.log('Error: ', err);
        });
        //this.navCtrl.push(QuantityPage);
    };
    PanierPage.prototype.scanCode = function () {
        var _this = this;
        this.options = {
            showTorchButton: true
        };
        var itemm;
        this.barcodeScanner.scan(this.options).then(function (barcodeData) {
            _this.scannedCode = Number(barcodeData.text);
            _this.itemRef.on('value', function (itemSnapshot) {
                //this.items = [];
                itemSnapshot.forEach(function (itemSnap) {
                    if (itemSnap.val().code == _this.scannedCode) {
                        if (_this.exist(itemSnap.val())) {
                            var toast = _this.toastCtrl.create({
                                message: "Product already exists just change the quantity",
                                duration: 3000,
                                position: 'top'
                            });
                            toast.present();
                        }
                        else {
                            itemm = itemSnap.val();
                            itemm.myQuantity = _this.share.myQuantity;
                            _this.share.items.push(itemm);
                            _this.share.prix += itemSnap.val().prix;
                            _this.share.myQuantity = 1;
                            return false;
                        }
                    }
                    /* else{
                       let toast = this.toastCtrl.create({
                         message: "Product already exists just change the quantity",
                         duration: 3000,
                         position: 'top'
                       });
                       toast.present();
                     }*/
                    // }
                });
            });
        }, function (err) {
            console.log('Error: ', err);
        });
        //this.navCtrl.push(QuantityPage);
    };
    PanierPage.prototype.exist = function (item) {
        this.share.items.forEach(function (itemm) {
            if (itemm.code == item.code && itemm.nom == item.nom && itemm.prix == item.prix)
                return true;
        });
        return false;
    };
    PanierPage.prototype.onGoToHome = function () {
        this.share.items = [];
        this.share.prix = 0;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PanierPage.prototype.onGoToChoice = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__choice_choice__["a" /* ChoicePage */]);
    };
    PanierPage.prototype.g = function (item, items) {
        if (items != item)
            return true;
        else
            return false;
    };
    PanierPage.prototype.delete = function (item) {
        var index = this.share.items.lastIndexOf(item);
        this.share.prix -= item.prix;
        this.share.items = (index > -1) ? this.share.items.slice(0, index).concat(this.share.items.slice(index + 1)) : this.share.items;
    };
    PanierPage.prototype.modifier = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__quantity_quantity__["a" /* QuantityPage */], { data: item });
    };
    PanierPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-panier',template:/*ion-inline-start:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\panier\panier.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'CART\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content class="bg-img"> \n    <div class="main-content"> \n        <div padding text-center class="container-logo">\n            <img src="assets/imgs/logoblack.png">\n        </div>\n    <div padding >\n    <ion-list>\n        <ion-item-sliding *ngFor="let item of this.share.items" >\n            <ion-item >\n                <h1>{{ item.nom }}  <span> x {{ item.myQuantity}}</span></h1>\n               <h3> description : {{ item.description }} </h3>\n                <h3>prix : {{ item.prix }}</h3>\n                \n                \n              </ion-item>\n          <ion-item-options side="left">\n            <button ion-button color=#5AAD45  (click)="modifier(item)">{{ \'Modify\' | translate }}</button>\n            <button ion-button color="danger" (click)="delete(item)">{{ \'Delete\' | translate }}</button>\n          </ion-item-options>\n        </ion-item-sliding>\n      </ion-list>\n  \n  \n    <ion-list>\n     \n    </ion-list>\n\n  </div>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <p id="prix">\n      {{ \'TOTAL\' | translate }}:\n    {{ this.share.prix}} DT\n  </p>\n  <button ion-button clear id="btn_ann" (click)="onGoToHome()" >{{ \'Cancel\' | translate }}</button>\n  <button ion-button id="btn_conf" (click)="onGoToChoice()" >{{ \'Confirm\' | translate }}</button>\n  <ion-fab  bottom right edge>\n    <button id="btn1" ion-fab mini (click)="scanCode()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\ASUS\ionic_project\QuickPay0.3\src\pages\panier\panier.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_share_share__["a" /* ShareProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]])
    ], PanierPage);
    return PanierPage;
}());

//# sourceMappingURL=panier.js.map

/***/ })

},[365]);
//# sourceMappingURL=main.js.map