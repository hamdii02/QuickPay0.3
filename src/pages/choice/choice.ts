import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { PanierPage } from '../panier/panier';
import {ShareProvider} from '../../providers/share/share';
import { PaymentPage } from '../payment/payment';
import { RecuePage } from '../recue/recue';
//import { RecuePage } from '../recue/recue';

/**
 * Generated class for the ChoicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choice',
  templateUrl: 'choice.html',
})
export class ChoicePage {
 banque={name:null};
 carte={name:null};
  constructor(public navCtrl: NavController,public share :ShareProvider,private toastCtrl: ToastController, public navParams: NavParams) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoicePage');
  }
  onGoToPanier(){
    this.navCtrl.push(PanierPage);
  }
  onGoToPayment(){
    if (this.share.banque.name!= null && this.carte.name!= null ){
      this.navCtrl.push(PaymentPage);
      }
      else{
        let toast = this.toastCtrl.create({
          message: "You must choose a bank and a card",
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }
  

}
