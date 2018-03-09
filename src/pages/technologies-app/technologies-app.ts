import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Accueil } from "../accueil/accueil";
import { AjouterTechno } from "../ajouter-techno/ajouter-techno";
import { Programmes } from "../programmes/programmes";
import { ProgrammesList } from '../programmes-list/programmes-list';

@Component({
  selector: 'page-technologies-app',
  templateUrl: 'technologies-app.html'
})
export class TechnologiesApp {

  ajouterTechnoRoot = AjouterTechno
  ProgRoot = ProgrammesList

  constructor(public navCtrl: NavController) { }

}
