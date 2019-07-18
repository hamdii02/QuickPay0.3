import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { ChoicePage } from '../choice/choice';
import { RecuePage } from '../recue/recue';
import firebase from 'firebase';
import {ShareProvider} from '../../providers/share/share';
import { productitem } from '../../models/product-item/product-item.interface';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
createdCode:"id:12556456463";
qrData:null;
num_panier :string;
carte_code :number=null;
code :number=null;

public itemR: firebase.database.Reference = firebase.database().ref('/banque');
public itemRef: firebase.database.Reference = firebase.database().ref('/achat');
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public share : ShareProvider, public navParams: NavParams) {
    
  }
  createCode() {
    this.createdCode = this.qrData;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }
  onGoToChoice(){
this.navCtrl.push(ChoicePage);

  }
  addItem(newliste: Array<productitem> ,prix: number) {
    this.itemRef.push(this.share.items);
    this.itemRef.push({ liste_produit: newliste ,
      prix:prix
      });
  }
  onGoToRecue(){
    this.addItem(this.share.items,this.share.prix);
    this.createCode();
    this.navCtrl.push(RecuePage);
  }
  test(){
    if(this.carte_code.toString().length!=12 || this.code.toString().length!=8 )
    {
      let toast = this.toastCtrl.create({
        message: "check your information please!",
        duration: 3000,
        position: 'top'
      });
      
      toast.present();
      return false
    }
   if(this.carte_code== null || this.code==null)
    {
      {
        let toast = this.toastCtrl.create({
          message: "carte number and password are required!",
          duration: 3000,
          position: 'top'
        });
        
        toast.present();
        return false;
    }
  
  }
  return true;
}
  check(){
    if(this.carte_code.toString().length!=12 || this.code.toString().length!=8 )
    {
      let toast = this.toastCtrl.create({
        message: "check your information please!",
        duration: 3000,
        position: 'top'
      });
      
      toast.present();
      return false
    }
   if(this.carte_code==null || this.code==null)
    {
      
        let toast = this.toastCtrl.create({
          message: "carte number and password are required!",
          duration: 3000,
          position: 'top'
        });
        
        toast.present();
        return false;
    

  }
  if(this.carte_code==123456789123 && this.code==12345678)
  {
 let toast = this.toastCtrl.create({
    message: "successfully authenticated",
    duration: 3000,
    position: 'top'
  });
  toast.present();
  this.onGoToRecue();
}
else{
  let toast = this.toastCtrl.create({
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
}

}
