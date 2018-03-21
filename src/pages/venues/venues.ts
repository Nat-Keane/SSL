import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

import { VenuePage } from '../../pages/venue/venue';

@Component({
  selector: 'page-venues',
  templateUrl: 'venues.html'
})

export class VenuesPage {
  venues: any[] = []
  imgs: string[] = [
    'venue1.jpg',
    'venue2.jpg',
    'venue3.jpg',
    'venue4.jpg'
  ]

  constructor(
    public modalCtrl: ModalController,
    private rest: RestProvider
  ) {
    this.rest.getVenues(10).subscribe(result => {
      this.venues = result.data;
    }, error => {
      console.log(error)
    })
  }

  viewVenue(venue: any) {
    let modal = this.modalCtrl.create(VenuePage, {
      venue
    })

    modal.present()
  }
}

