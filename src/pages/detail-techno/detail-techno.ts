import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail-techno',
  templateUrl: 'detail-techno.html',
})
export class DetailTechno {

  private techno;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams
  ) { }

  ionViewWillEnter() {
    this.techno = this.navParams.get('tech')
  }

}
