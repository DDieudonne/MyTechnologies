import { Component } from '@angular/core';
import { IonicPage, NavParams, LoadingController } from 'ionic-angular';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite';
import { AjouterTechno } from '../ajouter-techno/ajouter-techno';


const DATABASE_FILE_NAME: string = 'data.db';
@IonicPage()
@Component({
  selector: 'page-accueil',
  templateUrl: 'accueil.html',
})
export class Accueil {

  private technologiesData: any[] = [];

  private dbTechno: SQLiteObject;
  private submited: boolean = true;
  private categories: any[] = [
    "Front","Backend","Hybride","Autres"
  ];

  private techId: number = Date.now().valueOf();
  private techName: string;
  private categoryName: string;

  constructor(
    private navParams: NavParams,
    private loadCtrl: LoadingController,
   private sqlite: SQLite
  ) {
    this.createDataBaseFile();
  }
  private createDataBaseFile(): void {
    this.sqlite.create({
      name: DATABASE_FILE_NAME,
      location: 'default' // plus tard mettre ça dans la variable d'environnement
    }).then((db: SQLiteObject) => {
      this.dbTechno = db;
      this.createTable();
    }).catch(e => console.log('plugin', e));
  }

  private createTable(): void {
    this.dbTechno.executeSql('CREATE TABLE IF NOT EXISTS `technologies` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `name` TEXT NOT NULL UNIQUE, `categories` TEXT NOT NULL )', {})
      .then(() => { console.log('technologies is created!') })
      .catch(e => console.log("table non created", e));
  }

  private addTechnology(): void {
    this.dbTechno.executeSql('INSERT INTO `technologies` (name, categories) VALUES (?,?)', [this.techName, this.categoryName])
      .then(() => { console.log('dzefzde'); })
      .catch(e => console.log("table non created", e));
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
              console.log('technologiesData', data.rows.item);
            }
          }
        }
      })
      .catch(e => console.log(e));
  }

}
