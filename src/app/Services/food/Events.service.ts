import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reservation } from 'src/app/Model/Reservation.model';
import { NgModule } from '@angular/core';
import { Events } from 'src/app/Model/Events.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private apiUrl = 'http://localhost:9006/api/Events/add';

  constructor(private http: HttpClient) { }

  addEvent(Events: Events) {
    return this.http.post<Events>(this.apiUrl, Events);
  }
}
