//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { productitem } from '../../models/product-item/product-item.interface';

/*
  Generated class for the ShareProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareProvider {
  language : string;
  banque={name:null};
  [x: string]: any;
  public items:Array<productitem> = [];
  myQuantity=1;
  prix=0;
  market={name:null};
 // public items:Array<any> = [];
  constructor() {
    console.log('Hello ShareProvider Provider');
  }

}
