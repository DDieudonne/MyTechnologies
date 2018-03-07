import { Component } from '@angular/core';
import { ToastController, IonicPage } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-programmes',
  templateUrl: 'programmes.html',
})
export class Programmes {

  private submited: boolean = true;

  private valueRange;
  private categories: string[];
  private priorities: string[];
  private Technologies;

  constructor(
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,) {
  }

  ngOnChanges() {
    this.changeRange(event);
  }

  changeRange(e) {
    this.valueRange = e._value;
    this.submited = false;
  }

  ionViewWillEnter() {
  }

  getTechnologie() {
   
  }

}