import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-sched-details',
  templateUrl: 'sched-details.html',
})
export class SchedDetailsPage {

  private schedule;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewWillEnter() {
    this.schedule = this.navParams.get('sched');
  }

}
