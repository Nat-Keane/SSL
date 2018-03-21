import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-venue',
  templateUrl: 'venue.html',
})
export class VenuePage {
  venue: any = {}
  events: any[] = []
  eventImgs: string[] = [
    'event1.png',
    'event2.png',
    'event3.png',
    'event4.png'
  ]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private rest: RestProvider
  ) {
    this.venue = this.navParams.get('venue')
    this.rest.getEventsByVenue(this.venue.venue_id).subscribe(result => {
      if(result) {
        this.events = result.data
      }
    }, error => {
      console.log(error)
    })
  }

  close() {
    this.viewCtrl.dismiss()
  }
}
