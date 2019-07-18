import { Component } from '@angular/core';
import { NavController ,ToastController} from 'ionic-angular';
import { PanierPage } from '../panier/panier';
import {ShareProvider} from '../../providers/share/share';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public share:ShareProvider) {
    
  }
  cancel(){
    this.navCtrl.pop();
  }
  onGoToPanier(){
    
    if (this.share.market.name!= null){
    this.navCtrl.push(PanierPage);
    }
    else{
      let toast = this.toastCtrl.create({
        message: "You must choose a Supermarket",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    }
  }
}
