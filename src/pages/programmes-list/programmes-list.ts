import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { schedule } from '../../models/schedules';

@IonicPage()
@Component({
  selector: 'page-programmes-list',
  templateUrl: 'programmes-list.html',
})
export class ProgrammesList {

  private allSchedules: any[] = [];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams) {
  }

  ionViewWillEnter() {}

}
