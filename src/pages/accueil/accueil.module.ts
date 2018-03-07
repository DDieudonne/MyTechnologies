import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Accueil } from "./accueil";

@NgModule({
  declarations: [
    Accueil
  ],
  imports: [
    IonicPageModule.forChild(Accueil),
  ],
  entryComponents:[
    Accueil
  ]
})
export class AccueilPageModule {}
