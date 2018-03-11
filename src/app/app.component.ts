import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TechnologiesApp } from '../pages/technologies-app/technologies-app';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage = TechnologiesApp;

  constructor(
    platform: Platform, statusBar: StatusBar,
    splashScreen: SplashScreen,
  ) {
    platform.ready().then(() => {
      statusBar.styleDefault();
    });
  }
}

