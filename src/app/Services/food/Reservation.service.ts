import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { reservation } from 'src/app/Model/Reservation.model';
import { NgModule } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:9006/api/Reservation/add';

  constructor(private http: HttpClient) { }

  addReservation(Reservation: reservation) {
    return this.http.post<reservation>(this.apiUrl, Reservation);
  }
}
