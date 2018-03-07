import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgrammesList } from './programmes-list';

@NgModule({
  declarations: [
    ProgrammesList,
  ],
  imports: [
    IonicPageModule.forChild(ProgrammesList),
  ],
  entryComponents:[ProgrammesList]
})
export class ProgrammesListPageModule {}
