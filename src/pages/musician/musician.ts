import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-musician',
  templateUrl: 'musician.html',
})
export class MusicianPage {
  musician: any = {}
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
    this.musician = this.navParams.get('musician')
    
    this.rest.getEUByUserId(this.musician.user_id).subscribe(result => {
      let eventsUsers = result.data
      
      if(eventsUsers && eventsUsers.length > 0) {
        eventsUsers.forEach(eventUser => {
          this.rest.getEvent(eventUser.event_id).subscribe(result => {
            let event = result.data
            if(event) {
              this.events.push(event)
            }
          }, error => {
            console.log(error)
          })
        })
      }
    }, error => {
      console.log(error)
    })
  }

  close() {
    this.viewCtrl.dismiss()
  }
}
