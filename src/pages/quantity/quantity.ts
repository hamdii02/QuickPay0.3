import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PanierPage } from '../panier/panier';
import { ShareProvider } from '../../providers/share/share'
import { productitem } from '../../models/product-item/product-item.interface';
/**
 * Generated class for the QuantityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quantity',
  templateUrl: 'quantity.html',
})
export class QuantityPage {
  public item:productitem;
  constructor(public navCtrl: NavController,public share : ShareProvider, public navParams: NavParams) {
    this.item=navParams.get('data');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuantityPage');
  }
  cancel(){
    this.navCtrl.push(PanierPage);
  }
  onGoToHome(){
    var index=this.share.items.lastIndexOf(this.item);
    console.log("index is : " + index );
    this.share.items[index].myQuantity=this.share.myQuantity;
    this.share.prix+=this.item.prix *(this.item.myQuantity-1);
    this.share.myQuantity=1;
    this.navCtrl.push(PanierPage);
  }

}
