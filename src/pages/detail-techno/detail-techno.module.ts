import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailTechno } from "./detail-techno";

@NgModule({
  declarations: [DetailTechno],
  imports: [
    IonicPageModule.forChild(DetailTechno),
  ],
  entryComponents: [DetailTechno]
})
export class DetailTechnoPageModule { }
