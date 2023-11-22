import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import{HttpClientModule} from '@angular/common/http';
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';
import { Room4Component } from './room4/room4.component';
import { Room5Component } from './room5/room5.component';
import { Room6Component } from './room6/room6.component';
import { Room7Component } from './room7/room7.component';
import { Room8Component } from './room8/room8.component';

const appRoute :Routes=[
  
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    RoomsComponent,
    HomeHotelComponent,
    SearchComponent,
    TagsComponent,
    ContactComponent,
    EventsComponent,
    Room1Component,
    Room2Component,
    Room3Component,
    Room4Component,
    Room5Component,
    Room6Component,
    Room7Component,
    Room8Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
