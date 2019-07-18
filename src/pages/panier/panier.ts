import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController} from 'ionic-angular';
//import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
import { HomePage } from '../home/home';
import { BarcodeScanner,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
//mport { QuantityPage } from '../quantity/quantity';
import { ChoicePage } from '../choice/choice';
//import { AndroidPermissions } from '@ionic-native/android-permissions';
import { AngularFireDatabase,AngularFireList } from '@angular/fire/database';
//import { Observable } from 'rxjs';
//import { FirebasListObservable} from 'angularfire2/database'
import { productitem } from '../../models/product-item/product-item.interface';
import firebase from 'firebase';
import { ShareProvider } from '../../providers/share/share'
import { QuantityPage } from '../quantity/quantity';

@IonicPage()
@Component({
  selector: 'page-panier',
  templateUrl: 'panier.html',
})
export class PanierPage { 
  x=0;
  //public items: Array<any> = [];
public itemRef: firebase.database.Reference = firebase.database().ref('/market');
  /*itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
products: Observable<any[]>;*/
prodcuctListRef  : AngularFireList<productitem[]>;
  scannedCode =null;
  
  options:BarcodeScannerOptions;
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,public share : ShareProvider,public navParams: NavParams,database: AngularFireDatabase ,public barcodeScanner:BarcodeScanner ) {
   this.share.myQuantity=1;
   
  }
  ionViewDidLoad() {
    
  }
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
  
  scanCode1() {
   var itemm:productitem ;
  
    this.options={
      showTorchButton:true
    }
    this.scannedCode=5126326;
    this.itemRef.on('value', itemSnapshot => {
      //this.items = [];
      itemSnapshot.forEach( itemSnap => {
        if(itemSnap.val().code==this.scannedCode){
          if(!this.exist(itemSnap.val())){
         // itemSnap.val().myQuantity=this.share.myQuantity;
         itemm=itemSnap.val();
        itemm.myQuantity=this.share.myQuantity;
          //itemSnap.val().myQuantity=this.share.myQuantity;
        this.share.items.push(itemm);
       // this.navCtrl.push(QuantityPage);
      // var index=this.share.items.lastIndexOf(itemSnap.val());
       //this.share.items[this.share.items.length-1].myQuantity=this.share.myQuantity;
       
        this.share.prix+=itemSnap.val().prix;
        this.share.myQuantity=1;
       // if(this.x==0){this.navCtrl.push(PanierPage);this.x++;}
        
        return false;
          }
          else{
            let toast = this.toastCtrl.create({
              message: "Product already exist just change the quantity",
              duration: 3000,
              position: 'top'
            });
            toast.present();
          }
     }
      });
    });
    this.barcodeScanner.scan(this.options).then(barcodeData => {
      this.scannedCode = Number(barcodeData.text);
      
    }, (err) => {

        console.log('Error: ', err);
    });
    //this.navCtrl.push(QuantityPage);
  }
  scanCode() {
    this.options={
      showTorchButton:true
    }
    var itemm:productitem ;
    this.barcodeScanner.scan(this.options).then(barcodeData => {
      this.scannedCode = Number(barcodeData.text);
      this.itemRef.on('value', itemSnapshot => {
        //this.items = [];
        itemSnapshot.forEach( itemSnap => {
          if(itemSnap.val().code==this.scannedCode){
            if(this.exist(itemSnap.val())){
              let toast = this.toastCtrl.create({
                message: "Product already exists just change the quantity",
                duration: 3000,
                position: 'top'
              });
              toast.present();
            }
            else{
            itemm=itemSnap.val();
        itemm.myQuantity=this.share.myQuantity;
          this.share.items.push(itemm);
          this.share.prix+=itemSnap.val().prix;
        this.share.myQuantity=1;
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
    }, (err) => {

        console.log('Error: ', err);
    });
    //this.navCtrl.push(QuantityPage);
  }
   exist(item){
    this.share.items.forEach(itemm =>{
      if(itemm.code==item.code && itemm.nom==item.nom && itemm.prix==item.prix) 
      return true;
      
    })
    return false ;
  }
  onGoToHome(){
    
   
    this.share.items=[];
    
    this.share.prix=0;
    this.navCtrl.push(HomePage) ;
   

  }
  onGoToChoice(){
    this.navCtrl.push(ChoicePage) ;
  }
  g(item,items){
    if(items!=item) return true;
    else return false ;
  }
  delete(item){
    var index=this.share.items.lastIndexOf(item);
    this.share.prix-=item.prix;
    this.share.items = (index > -1) ? [
      ...this.share.items.slice(0, index),
      ...this.share.items.slice(index + 1)
  ] : this.share.items;
  }
  modifier(item)
  {
    
    this.navCtrl.push(QuantityPage,{data : item});
  }


}