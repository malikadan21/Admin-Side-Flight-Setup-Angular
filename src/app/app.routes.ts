import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { AirportComponent } from './pages/admin/airport/airport.component';
import { AllFlightsComponent } from './pages/admin/all-flights/all-flights.component';
import { BookingsComponent } from './pages/admin/bookings/bookings.component';
import { CityComponent } from './pages/admin/city/city.component';
import { NewFlightComponent } from './pages/admin/new-flight/new-flight.component';
import { NavbarComponent } from './navbar/navbar.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'airport',
        pathMatch: 'full'
      },
      {
        path: 'airport',
        component: AirportComponent
      },
      {
        path: 'all-flights',
        component: AllFlightsComponent
      },
      {
        path: 'bookings',
        component: BookingsComponent
      },
      {
        path: 'city',
        component: CityComponent
      },
      {
        path: 'new-flight',
        component: NewFlightComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
