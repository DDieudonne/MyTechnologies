import { Component, OnInit } from '@angular/core';
import { ToastController, IonicPage, ViewController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';

@Component({
  selector: 'page-programmes',
  templateUrl: 'programmes.html',
})
export class Programmes implements OnInit {

  private nameSchedule: string;
  private dateSchedule: string;
  private nameScheduleTech: string = "Angular"
  private nameScheduleCat: string;
  private nameScheduleCatOther: string;
  private nameSchedulePrio: string;
  private remarkSchedule: string;
  private durationSchedule: number;
  private submited: boolean = true;
  private valueRange;
  private categories: string[] = [
    "Frontend", "Backend", "Hybride", "Autre"
  ]
  private priorities: string[] = [
    "Haute", "Moyenne", "Basse"
  ]
  private Technologies: any[] = [
    "Angular", "Nodejs", "Java", "Ionic", "ReactJs", "SQL", "MongoDB", "PWA", "Android", "Ios"
  ];
  private othersCat: boolean = false;

  constructor(
    private toastCtrl: ToastController,
    private loadCtrl: LoadingController,
    private viewCtrl: ViewController) {
  }

  ngOnChanges() {
    this.changeRange(event);
  }

  ngOnInit() {
    this.selectedCat(event);
  }

  changeRange(e) {
    this.valueRange = e._value;
    this.submited = false;
  }

  ionViewWillEnter() { }

  selectedCat(e) {
    if (this.nameScheduleCat == "Autre") {
      this.othersCat = true;
    } else {
      this.othersCat = false;
    }
  }

  addSchedule() {
    if (this.nameScheduleCatOther != null) {
      this.viewCtrl.dismiss({
        nameSchedule: this.nameSchedule,
        dateSchedule: this.dateSchedule,
        nameScheduleTech: this.nameScheduleTech,
        nameScheduleCatOther: this.nameScheduleCatOther,
        nameSchedulePrio: this.nameSchedulePrio,
        remarkSchedule: this.remarkSchedule,
        durationSchedule: this.durationSchedule
      });
    } else {
      this.viewCtrl.dismiss({
        nameSchedule: this.nameSchedule,
        dateSchedule: this.dateSchedule,
        nameScheduleTech: this.nameScheduleTech,
        nameScheduleCat: this.nameScheduleCat,
        nameSchedulePrio: this.nameSchedulePrio,
        remarkSchedule: this.remarkSchedule,
        durationSchedule: this.durationSchedule
      });
    }
  }

  back() {
    this.viewCtrl.dismiss();
  }

}