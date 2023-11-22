import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { Contact } from 'src/app/Model/Contact.model';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private apiUrl = 'http://localhost:9006/api/Contact/add';

  constructor(private http: HttpClient) { }

  addReservation(Contact: Contact) {
    return this.http.post<Contact>(this.apiUrl, Contact);
  }
}
