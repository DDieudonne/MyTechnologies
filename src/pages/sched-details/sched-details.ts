import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-sched-details',
  templateUrl: 'sched-details.html',
})
export class SchedDetailsPage {

  private schedule;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillEnter() {
  }

}
