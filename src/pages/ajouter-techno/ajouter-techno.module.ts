import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AjouterTechno } from "./ajouter-techno";

@NgModule({
  declarations: [AjouterTechno],
  imports: [
    IonicPageModule.forChild(AjouterTechno),
  ],
  entryComponents: [
    AjouterTechno
  ]
})
export class AjouterTechnoPageModule {}
