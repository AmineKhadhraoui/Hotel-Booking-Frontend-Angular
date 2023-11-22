import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { Room1Component } from './room1/room1.component';
import { Room2Component } from './room2/room2.component';
import { Room3Component } from './room3/room3.component';
import { Room4Component } from './room4/room4.component';
import { Room5Component } from './room5/room5.component';
import { Room6Component } from './room6/room6.component';
import { Room7Component } from './room7/room7.component';
import { Room8Component } from './room8/room8.component';
const routes: Routes = [
  {path:'',component:HomeHotelComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'Restaurant',component:HomeComponent},
  {path: 'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'events',component:EventsComponent},
  {path:'room1',component:Room1Component},
  {path:'room2',component:Room2Component},
  {path:'room3',component:Room3Component},
  {path:'room4',component:Room4Component},
  {path:'room5',component:Room5Component},
  {path:'room6',component:Room6Component},
  {path:'room7',component:Room7Component},
  {path:'room8',component:Room8Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
