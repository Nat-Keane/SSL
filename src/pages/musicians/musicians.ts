import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { MusicianPage } from '../musician/musician';

@Component({
  selector: 'page-musicians',
  templateUrl: 'musicians.html'
})

export class MusiciansPage {
  musicians: any = [];
  imgs: any = [
    'adam.png',
    'ben.png',
    'hieu.png',
    'mike.png',
    'perry.png'
  ]

  constructor(
    public modalCtrl: ModalController,
    private rest: RestProvider
  ) {
    this.rest.getUsers(10).subscribe(result => {
      this.musicians = result.data;
    }, error => {
      console.log(error)
    })
  }

  viewMusician(musician: any) {
    let modal = this.modalCtrl.create(MusicianPage, {
      musician
    })

    modal.present()
  }
}

