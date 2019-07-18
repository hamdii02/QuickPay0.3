import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecuePage } from './recue';

@NgModule({
  declarations: [
    RecuePage,
  ],
  imports: [
    IonicPageModule.forChild(RecuePage),
  ],
})
export class RecuePageModule {}
