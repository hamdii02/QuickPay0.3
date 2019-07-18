import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuantityPage } from './quantity';

@NgModule({
  declarations: [
    QuantityPage,
  ],
  imports: [
    IonicPageModule.forChild(QuantityPage),
  ],
})
export class QuantityPageModule {}
