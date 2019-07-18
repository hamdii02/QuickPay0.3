import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { ShareProvider } from '../../providers/share/share';
import { HomePage } from '../home/home';
import { DatePicker } from '@ionic-native/date-picker';
//import { HomePage } from '../home/home';
/**
 * Generated class for the RecuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recue',
  templateUrl: 'recue.html',
})
export class RecuePage {
  qrData = "HSDBHSDF";
  createdCode = null;
  scannedCode = null;
  name_m = null ;
  myDate: String = new Date().toISOString();
  constructor(public navCtrl: NavController,public share : ShareProvider, public navParams: NavParams,public barcodeScanner:BarcodeScanner) {
     
  }
   Ctrl($scope)
{
    $scope.date = new Date();
}
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuePage');
  }
  createCode() {
    this.createdCode = this.qrData;
  }
  cancel(){

    this.share.items=[];
    this.navCtrl.push(HomePage);


}
}