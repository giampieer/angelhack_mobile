import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromedioPage } from './promedio';

@NgModule({
  declarations: [
    PromedioPage,
  ],
  imports: [
    IonicPageModule.forChild(PromedioPage),
  ],
})
export class PromedioPageModule {}
