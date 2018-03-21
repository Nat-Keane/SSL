import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  events: any[] = [];
  users: any[] = [];
  userImgs: any = [
    'adam.png',
    'ben.png',
    'hieu.png',
    'mike.png',
    'perry.png'
  ]
  eventImgs: string[] = [
    'event1.png',
    'event2.png',
    'event3.png',
    'event4.png'
  ]

  constructor(private rest: RestProvider) {
    this.rest.getUpcomingEvents(10).subscribe(result => {
      this.events = result.data;
    }, error => {
      console.log(error)
    })

    this.rest.getUsers(10).subscribe(result => {
      this.users = result.data;
    }, error => {
      console.log(error)
    })
  }
}

