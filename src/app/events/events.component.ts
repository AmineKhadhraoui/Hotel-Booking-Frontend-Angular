import { Component, OnInit } from '@angular/core';
import { Events } from '../Model/Events.model';
import { EventsService } from '../Services/food/Events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
Events:Events ={ name:'',email:'',phone: undefined,reservation_type:'',reservation_date: undefined};
  constructor(private EventsService:EventsService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.EventsService.addEvent(this.Events).subscribe(
      Events => {
        console.log('Event created successfully: ', Events);
        // reset the form fields
        this.Events= { name:'',email:'',phone: undefined,reservation_type:'',reservation_date: undefined };
      },
      error => console.error('Error creating Event: ', error)
    );
  }

}
