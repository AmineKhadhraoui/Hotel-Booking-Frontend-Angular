import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeHotelComponent } from './home-hotel/home-hotel.component';
import { SearchComponent } from './search/search.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'',component:HomeHotelComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'reservation',component:ReservationComponent},
  {path:'Restaurant',component:HomeComponent},
  {path: 'search/:searchItem', component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  {path:'contact',component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
