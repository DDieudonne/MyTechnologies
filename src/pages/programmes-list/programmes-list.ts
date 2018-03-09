import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { schedule } from '../../models/schedules';
import { Programmes } from '../programmes/programmes';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';

const DATABASE_FILE_NAME: string = 'data.db';
@IonicPage()
@Component({
  selector: 'page-programmes-list',
  templateUrl: 'programmes-list.html',
})
export class ProgrammesList {

  private dbTechno: SQLiteObject;
  private allSchedules: any[] = [];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private sqlite: SQLite,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController) {
  }

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
      this.getData();
    }).catch(e => console.log('plugin', e));
  }

  private createTable(): void {
    this.dbTechno.executeSql('CREATE TABLE IF NOT EXISTS `schedules` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `nameSchedule` TEXT NOT NULL, `nameScheduleTech` TEXT NOT NULL, `nameScheduleCat` TEXT NOT NULL, `nameScheduleCatOther` TEXT NOT NULL, `nameSchedulePrio` TEXT NOT NULL, `remarkSchedule` TEXT NOT NULL, `durationSchedule` INTEGER NOT NULL )', {})
      .then(() => { alert("schedule créer avec succes") })
      .catch(e => alert("schedule non creer"));
  }

  addSchedule() {
    let modal = this.modalCtrl.create(Programmes);
    modal.present();
    modal.onWillDismiss(data => {
      if (data != undefined || data != null) {
        if (data.nameScheduleCatOther) {
          
          // this.dbTechno.executeSql('INSERT INTO `schedules` (nameSchedule, nameScheduleTech,nameScheduleCatOther,nameSchedulePrio,remarkSchedule,durationSchedule) VALUES (?,?,?,?,?,?)', [data.nameSchedule, data.nameScheduleTech, data.nameScheduleCatOther, data.nameSchedulePrio, data.remarkSchedule, data.durationSchedule])
          //   .then(() => {
          //     let toast = this.toastCtrl.create({
          //       message: 'programme créer avec succès',
          //       duration: 3000
          //     });
          //     toast.present();
          //   })
          //   .catch(() => {
          //     let toast = this.toastCtrl.create({
          //       message: 'Erreur dans création du programme',
          //       duration: 3000
          //     });
          //     toast.present();
          //   });
          // this.getData();
        } else {
          // this.dbTechno.executeSql('INSERT INTO `schedules` (nameSchedule, nameScheduleTech,nameScheduleCat,nameSchedulePrio,remarkSchedule,durationSchedule) VALUES (?,?,?,?,?,?)', [data.nameSchedule, data.nameScheduleTech, data.nameScheduleCat, data.nameSchedulePrio, data.remarkSchedule, data.durationSchedule])
          //   .then(() => {
          //     let toast = this.toastCtrl.create({
          //       message: 'programme créer avec succès',
          //       duration: 3000
          //     });
          //     toast.present();
          //   })
          //   .catch(() => {
          //     let toast = this.toastCtrl.create({
          //       message: 'Erreur dans création du programme',
          //       duration: 3000
          //     });
          //     toast.present();
          //   });
          // this.getData();
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

}
