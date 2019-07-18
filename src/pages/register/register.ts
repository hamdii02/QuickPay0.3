import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import {ShareProvider } from '../../providers/share/share';
import * as firebase from 'firebase';
//import { HomePage } from '../home/home';

export class User {
    name :string;
    email: string;
    password: string;
}


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public user:User = new User();

  constructor(public navCtrl: NavController, public share:ShareProvider,public navParams: NavParams,private toastCtrl: ToastController,public fAuth: AngularFireAuth){
  }
  
login()
{
  this.navCtrl.push(LoginPage);
}

  async register() {
    try {
      var r = await this.fAuth.auth.createUserWithEmailAndPassword(
        this.user.email,
        this.user.password
      ).then( res =>{let user = firebase.auth().currentUser;
        user.sendEmailVerification();
        let toast = this.toastCtrl.create({
          message: "check your mail to verify your account",
          duration: 3000,
          position: 'top'
        });
        toast.present();
        console.log("Successfully registered!");
        this.navCtrl.push('LoginPage');
      })

    } catch (err) {
      let toast = this.toastCtrl.create({
        message: "Registration failed",
        duration: 3000,
        position: 'top'
      });
      toast.present();
      console.error(err);
    }
  }
  
}

