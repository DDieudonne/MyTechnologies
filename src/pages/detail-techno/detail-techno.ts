import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-detail-techno',
  templateUrl: 'detail-techno.html',
})
export class DetailTechno {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    console.log('ionViewDidLoad DetailTechnoPage', this.navParams.get('Technologies'));
  }

}
