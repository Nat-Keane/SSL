import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class RestProvider {
  apiUrl = 'http://www.susolo-app.talyakeane.com/api' 
  //apiUrl = 'http://localhost:8000/api'
  headers: Headers
  options: RequestOptions

  constructor(private http: Http) { 
    this.headers = new Headers()
    this.headers.append("Accept", "application/json")
    this.options = new RequestOptions({ headers: this.headers })
  }

  getUsers(limit?: number) {
    let url: string = `${this.apiUrl}/users`
    if(limit) {
      url += `?limit=${limit}`
    }
    
    return this.http.get(url, this.options).map(response => response.json())
  }

  getEvents(limit?: number) {
    let url: string = `${this.apiUrl}/events`
    if(limit) {
      url += `?limit=${limit}`
    }

    return this.http.get(url, this.options).map(response => response.json())
  }

  getUpcomingEvents(limit?: number) {
    let url: string = `${this.apiUrl}/events?upcoming=true`
    if(limit) {
      url += `&limit=${limit}`
    }

    return this.http.get(url, this.options).map(response => response.json())
  }

  getEventsByVenue(venueId: number) {
    return this.http.get(`${this.apiUrl}/events?venue=${venueId}`).map(response => response.json())
  }

  getEvent(eventId: number) {
    return this.http.get(`${this.apiUrl}/events/${eventId}`, this.options).map(response => response.json())
  }

  getEUByUserId(userId: number) {
    return this.http.get(`${this.apiUrl}/events-users?user_id=${userId}`, this.options).map(response => response.json())
  }

  getVenues(limit?: number) {
    let url: string = `${this.apiUrl}/venues`
    if(limit) {
      url += `?limit=${limit}`
    }

    return this.http.get(url, this.options).map(response => response.json())
  }
}
