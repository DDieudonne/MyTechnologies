import { Component, OnChanges } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Accueil } from "../accueil/accueil";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { SerachProvider } from '../../providers/serach/serach';

const DATABASE_FILE_NAME: string = 'data.db';
@Component({
  selector: 'page-ajouter-techno',
  templateUrl: 'ajouter-techno.html',
})
export class AjouterTechno {

  private dbTechno: SQLiteObject;
  private submited: boolean = true;
  private categories: any[] = [
    "Front", "Backend", "Hybride", "Autres"
  ];

  private techName: string;
  private categoryName: string;
  private technologiesData: any[] = [];
  private searchTerm: string = '';

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private sqlite: SQLite,
    private loadingCtrl: LoadingController,
    private _searchBar: SerachProvider,
    private toastCtrl: ToastController
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
      this.getData();
    }).catch(e => console.log('plugin', e));
  }

  private createTable(): void {
    this.dbTechno.executeSql('CREATE TABLE IF NOT EXISTS `technologies` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT NOT NULL UNIQUE, `categories` TEXT NOT NULL )', {})
      .then(() => { console.log('technologies is created!') })
      .catch(e => console.log("table non created", e));
  }

  private addTechnology(): void {
    this.dbTechno.executeSql('INSERT INTO `technologies` (name, categories) VALUES (?,?)', [this.techName, this.categoryName])
      .then(() => {
        let toast = this.toastCtrl.create({
          message: 'Technologie créer avec succès',
          duration: 3000
        });
        toast.present();
      })
      .catch(() => {
        let toast = this.toastCtrl.create({
          message: 'Erreur dans réation de technologie',
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
    }, 3000);
    this.techName = '';
    this.categoryName = '';
  }

  getData() {
    this.technologiesData = [];
    this.dbTechno.executeSql('SELECT * FROM technologies', {})
      .then((data) => {
        if (data == null) {
          return;
        } else if (data.rows) {
          if (data.rows.length > 0) {
            for (let i = 0; i < data.rows.length; i++) {
              this.technologiesData.push(data.rows.item(i));
            }
          }
        }
      })
      .catch(e => console.log(e));
  }

  searchTech(event) {
    this.technologiesData = this.filterItems(event.target.value);
    if (event.data == null) {
      let loading = this.loadingCtrl.create({
        content: 'Veuillez patienter svp...'
      });
      loading.present();
      setTimeout(() => {
        this.getData();
        loading.dismiss();
      }, 3000);
    }
  }

  filterItems(searchTerm) {
    return this.technologiesData.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase().trim()) > -1;
    });

  }

  onCancel(event){
    this.getData();
  }

  moreDetails(tech) { }


}
