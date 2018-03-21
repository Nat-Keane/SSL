import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIREBASE_CREDENTIALS } from './credentials.firebase';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { MusiciansPage } from '../pages/musicians/musicians';
import { VenuesPage } from '../pages/venues/venues';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();

      firebase.initializeApp(FIREBASE_CREDENTIALS)

      const unsubscribe = firebase.auth().onAuthStateChanged( user => {
        if (!user) {
          this.rootPage = LoginPage;
          unsubscribe();
        } else { 
          this.rootPage = HomePage;
          unsubscribe();
        }
      });
    });
  }
  
  goToHome(){
    this.navCtrl.setRoot(HomePage);
  }

  goToMusicians(){
    this.navCtrl.setRoot(MusiciansPage);
  }
  
  goToVenues(params){
    this.navCtrl.setRoot(VenuesPage);
  }
}
