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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoute,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
