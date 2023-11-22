import { Component, OnInit } from '@angular/core';
import { Contact } from '../Model/Contact.model';
import { NgModule } from '@angular/core';
import { ContactService } from '../Services/food/Contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  Contact :Contact={name:'',email:'',subject:'',message:''};

  constructor(private ContactService:ContactService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.ContactService.addReservation(this.Contact).subscribe(
      Contact => {
        console.log('Contact created successfully: ', Contact);
        // reset the form fields
        this.Contact = { name:'', email:'', subject: '', message:''};
      },
      error => console.error('Error creating Contact: ', error)
    );
  }

}
