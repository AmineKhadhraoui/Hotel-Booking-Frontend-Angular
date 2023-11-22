import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../Services/food/Reservation.service';
import { reservation } from 'src/app/Model/Reservation.model';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
Reservation:reservation ={name:'',email:'',phone: undefined,check_in:'',check_out:'',number_guests:undefined,room_type:''};

  constructor(private reservationService :ReservationService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.reservationService.addReservation(this.Reservation).subscribe(
      Reservation => {
        console.log('Reservation created successfully: ', Reservation);
        // reset the form fields
        this.Reservation = { name:'', email:'', phone: undefined, check_in:'', check_out:'', number_guests:undefined, room_type:'' };
      },
      error => console.error('Error creating Reservation: ', error)
    );
  }
  
 /* onSubmit() {
    this.reservationService.addReservation(this.Reservation).subscribe(
      Reservation => console.log('Reservation created successfully: ', Reservation),
      error => console.error('Error creating Reservation: ', error)
      
    );
}*/
}
