import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { schedule } from '../../models/schedules';
import { Programmes } from '../programmes/programmes';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { SchedDetailsPage } from '../sched-details/sched-details';

const DATABASE_FILE_NAME: string = 'data.db';
@Component({
  selector: 'page-programmes-list',
  templateUrl: 'programmes-list.html',
})
export class ProgrammesList {

  private dbTechno: SQLiteObject;
  private allSchedules: any[] = [];

  private nameSchedule;
  private dateSchedule;
  private nameScheduleTech;
  private nameScheduleCat;
  private nameSchedulePrio;
  private nameScheduleCatOther;
  private remarkSchedule;
  private durationSchedule;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private sqlite: SQLite,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController
  ) { }

  ionViewWillEnter() {
    let loading = this.loadingCtrl.create({
      content: 'Veuillez patienter svp...'
    });
    loading.present();
    setTimeout(() => {
      this.createDataBaseFile();
      loading.dismiss();
    }, 3000);
  }

  private createDataBaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default' // plus tard mettre ça dans la variable d'environnement
    }).then((db: SQLiteObject) => {
      this.dbTechno = db;
      this.createTable();
      let loading = this.loadingCtrl.create({
        content: 'Veuillez patienter svp...'
      });
      loading.present();
      setTimeout(() => {
        this.getData();
        loading.dismiss();
      }, 1000);
    }).catch(() => { });
  }

  private createTable(): void {
    this.dbTechno.executeSql('CREATE TABLE IF NOT EXISTS `schedules` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `nameSchedule` TEXT NOT NULL, `dateSchedule`TEXT NOT NULL, `nameScheduleTech` TEXT NOT NULL, `nameScheduleCat` TEXT NOT NULL, `nameSchedulePrio` TEXT NOT NULL, `remarkSchedule` TEXT NOT NULL, `durationSchedule` INTEGER NOT NULL )', {})
      .then(() => { })
      .catch(() => { });
  }

  addSchedule() {
    let modal = this.modalCtrl.create(Programmes);
    modal.present();
    modal.onWillDismiss(data => {
      if (data != undefined || data != null) {
        if (data.nameScheduleCatOther) {
          console.log(data);
          this.nameSchedule = data.nameSchedule;
          this.dateSchedule = data.dateSchedule
          this.nameScheduleTech = data.nameScheduleTech
          this.nameScheduleCat = data.nameScheduleCatOther;
          this.nameSchedulePrio = data.nameSchedulePrio;
          this.remarkSchedule = data.remarkSchedule;
          this.durationSchedule = data.durationSchedule;
          this.dbTechno.executeSql('INSERT INTO `schedules` (nameSchedule, dateSchedule, nameScheduleTech,nameScheduleCat,nameSchedulePrio,remarkSchedule,durationSchedule) VALUES (?,?,?,?,?,?,?)', [this.nameSchedule, this.dateSchedule, this.nameScheduleTech, this.nameScheduleCat, this.nameSchedulePrio, this.remarkSchedule, this.durationSchedule])
            .then(() => {
              let toast = this.toastCtrl.create({
                message: 'programme créer avec succès',
                duration: 3000
              });
              toast.present();
            })
            .catch(() => {
              let toast = this.toastCtrl.create({
                message: 'Erreur dans création du programme',
                duration: 3000
              });
              toast.present();
            });
          let loading = this.loadingCtrl.create({
            content: 'Veuillez patienter svp...'
          });
          loading.present();
          setTimeout(() => {
            this.getData();
            loading.dismiss();
          }, 1000);
        } else {
          console.log(data);
          this.nameSchedule = data.nameSchedule;
          this.dateSchedule = data.dateSchedule
          this.nameScheduleTech = data.nameScheduleTech
          this.nameScheduleCat = data.nameScheduleCat;
          this.nameSchedulePrio = data.nameSchedulePrio;
          this.remarkSchedule = data.remarkSchedule;
          this.durationSchedule = data.durationSchedule;
          this.dbTechno.executeSql('INSERT INTO `schedules` (nameSchedule, dateSchedule, nameScheduleTech,nameScheduleCat,nameSchedulePrio,remarkSchedule,durationSchedule) VALUES (?,?,?,?,?,?,?)', [this.nameSchedule, this.dateSchedule, this.nameScheduleTech, this.nameScheduleCat, this.nameSchedulePrio, this.remarkSchedule, this.durationSchedule])
            .then(() => {
              let toast = this.toastCtrl.create({
                message: 'programme créer avec succès',
                duration: 3000
              });
              toast.present();
            })
            .catch(() => {
              let toast = this.toastCtrl.create({
                message: 'Erreur dans création du programme',
                duration: 3000
              });
              toast.present();
            });
          let loading = this.loadingCtrl.create({
            content: 'Veuillez patienter svp...'
          });
          loading.present();
          setTimeout(() => {
            this.getData();
            loading.dismiss();
          }, 1000);
        }
      }
    })
  }

  getData() {
    this.allSchedules = [];
    this.dbTechno.executeSql('SELECT * FROM schedules', {})
      .then((data) => {
        if (data == null) {
          return;
        } else if (data.rows) {
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              this.allSchedules.push(data.rows.item(i));
            }
          }
        }
      })
      .catch(e => console.log(e));
  }

  searchTech(event) {
    if (event == undefined) { this.getData(); }
    else if (event.data == null) {
      this.getData();
    } else {
      this.allSchedules = this.filterItems(event.target.value);
    }
  }

  filterItems(searchTerm) {
    return this.allSchedules.filter((tech) => {
      return tech.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  onCancel(event) {
    this.getData();
  }

}
