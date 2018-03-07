import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { HttpModule } from '@angular/http';
import { SQLite } from '@ionic-native/sqlite';
import { Accueil } from '../pages/accueil/accueil';
import { AjouterTechno } from '../pages/ajouter-techno/ajouter-techno';
import { DetailTechno } from '../pages/detail-techno/detail-techno';
import { Programmes } from '../pages/programmes/programmes';
import { ProgrammesList } from '../pages/programmes-list/programmes-list';
import { TechnologiesApp } from '../pages/technologies-app/technologies-app';

@NgModule({
  declarations: [
    MyApp,
    Accueil,
    AjouterTechno,
    DetailTechno,
    Programmes,
    ProgrammesList,
    TechnologiesApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Accueil,
    AjouterTechno,
    DetailTechno,
    Programmes,
    ProgrammesList,
    TechnologiesApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite
  ]
})
export class AppModule { }
