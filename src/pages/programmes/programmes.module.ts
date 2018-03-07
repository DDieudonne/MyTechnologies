import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Programmes } from "./programmes";

@NgModule({
  declarations: [Programmes],
  imports: [
    IonicPageModule.forChild(Programmes),
  ],
  entryComponents: [Programmes]
})

export class ProgrammesPageModule {}
