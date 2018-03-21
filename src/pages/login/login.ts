import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthProvider } from '../../providers/auth/auth';

import { HomePage } from '../../pages/home/home';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user: any = {}

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public keyboard: Keyboard,
    private auth: AuthProvider
  ) { }

  login() {
    this.keyboard.close()

    // Validate form inputs here

    let loader = this.loadingCtrl.create({
      content: "Signing you in..."
    })

    loader.present().then(() => {
      this.auth.login(this.user.email, this.user.password).then((user) => {
        if(user) {
          this.navCtrl.setRoot(HomePage)
        }

        loader.dismiss()
      }).catch((e) => {
        loader.dismiss()
      })
    })
  }
}