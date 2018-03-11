import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SchedDetailsPage } from './sched-details';

@NgModule({
  declarations: [
    SchedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SchedDetailsPage),
  ],
})
export class SchedDetailsPageModule {}
