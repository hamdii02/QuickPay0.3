import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Platform } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import { RegisterPage } from '../register/register';
import {HomePage} from '../home/home';
import { TranslateService } from '@ngx-translate/core';
import { ForgetPage } from '../forget/forget';
import { LoadingProvider } from '../../providers/loading/loading';
export class User {
  email: string;
  password: string;
}
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public user:User = new User();
  passwordtype:string='password';
  authForm : FormGroup;
  email: AbstractControl;
	password: AbstractControl;
  passeye:string ='eye';
  constructor(public navCtrl: NavController, public fmb: FormBuilder,public loadingProvider: LoadingProvider,private toastCtrl: ToastController,public translateService: TranslateService, private fb: Facebook,public fAuth: AngularFireAuth, private platform: Platform,public navParams: NavParams,private afAuth: AngularFireAuth) {
    //this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      //this.loginErrorString = value;
 // })
 this.authForm = this.fmb.group({
  'email' : [null, Validators.compose([Validators.required])],
  'password': [null, Validators.compose([Validators.required])],
});

    this.email = this.authForm.controls['email'];
    this.password = this.authForm.controls['password'];
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.fb.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res));
    }
  }
  moveToHome(res){
  	console.log('res',res);
  	this.navCtrl.setRoot(HomePage,{res:res});
  }
  socialLogin(isLogin){
  	if (isLogin == "facebook"){
      this.loadingProvider.startLoading();

      let provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(() => {
          this.loadingProvider.startLoading();
            firebase.auth().getRedirectResult().then((result)=>{
              console.log('result',result);
              this.moveToHome(result.user);
              this.loadingProvider.stopLoading();
            }).catch(function(error){
              this.loadingProvider.stopLoading();
              alert(error.message);
              console.log('error',error);
            })
            this.loadingProvider.stopLoading();
        }).catch(function(error){
          this.loadingProvider.stopLoading();
          alert(error.message);
          console.log('error',error);
        })
        this.loadingProvider.stopLoading();
  	}else if(isLogin == "google"){
      this.loadingProvider.startLoading();
      let provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(() => {
          this.loadingProvider.startLoading();
            firebase.auth().getRedirectResult().then((result)=>{
              console.log('result',result);
              this.loadingProvider.stopLoading();
              this.moveToHome(result.user);
            }).catch(function(error){
              this.loadingProvider.stopLoading();
              alert(error.message);
              console.log('error',error);
            })
            this.loadingProvider.stopLoading();
        }).catch(function(error){
          this.loadingProvider.stopLoading();
          alert(error.message);
          console.log('error',error);
        })
        this.loadingProvider.stopLoading();
  	}else if(isLogin == "twitter"){
  		// this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider())
      // 	.then(res => {
      // 		 this.moveToHome(res);
      // 	})
      // 	.catch(err => console.log('err',err));
  	}else if(isLogin == "github"){
  		// this.afAuth.auth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      // 	.then(res => {
      // 		 this.moveToHome(res);
      // 	})
      // 	.catch(err => console.log('err',err));
  	}

  }

  async signInWithFacebook1() {
   
    await this.fAuth.auth
          .signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

  async login() {
    try {
      var r = await this.fAuth.auth.signInWithEmailAndPassword(
        this.user.email,
        this.user.password
      );
      
      if (r) {
        let toast = this.toastCtrl.create({
          message: "Successfully logged in!",
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("Successfully logged in!");
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.push(HomePage);
      }

    } catch (err) {
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      console.error(err);
      console.log("error");
    }
  }
  signOut() {
    this.afAuth.auth.signOut();
  }
  gotoregister(){
    this.navCtrl.push(RegisterPage);
  }
  pass(){
    this.navCtrl.push(HomePage);
  }
  presentToast(err) {
    const toast = this.toastCtrl.create({
      message: err.message,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.present();
  }
  managePassword() {
    if(this.passwordtype == 'password'){
      this.passwordtype='text';
      this.passeye='eye-off';
    }else{
      this.passwordtype='password';
      this.passeye = 'eye';
    }
  }
  forgetpassword(){
    this.navCtrl.push(ForgetPage);
  }

}
