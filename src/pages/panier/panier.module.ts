import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PanierPage } from './panier';

@NgModule({
  declarations: [
    PanierPage,
  ],
  imports: [
    IonicPageModule.forChild(PanierPage),
  ],
})
export class PanierPageModule {}
