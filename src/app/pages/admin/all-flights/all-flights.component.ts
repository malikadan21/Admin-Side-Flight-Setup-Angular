import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-flights',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './all-flights.component.html',
  styleUrls: ['./all-flights.component.css']
})
export class AllFlightsComponent {

  airportLists = [
    { code: 'ISB', name: 'Islamabad International Airport', city: 'Islamabad' },
    { code: 'KHI', name: 'Jinnah International Airport', city: 'Karachi' },
    { code: 'LHE', name: 'Allama Iqbal International Airport', city: 'Lahore' },
    { code: 'MUX', name: 'Multan International Airport', city: 'Multan' },
    { code: 'PEW', name: 'Peshawar International Airport', city: 'Peshawar' }
  ];

  flightsList = [
    { 
      airline: 'PIA - Pakistan International Airlines',
      arrivalAirportCode: 'ISB',
      departureAirportCode: 'KHI',
      travelDate: '2024-07-01',
      price: 5000,
      action: 'Book Now'
    },
    { 
      airline: 'Serene Air',
      arrivalAirportCode: 'LHE',
      departureAirportCode: 'MUX',
      travelDate: '2024-07-05',
      price: 4500,
      action: 'Book Now'
    },
    { 
      airline: 'Airblue',
      arrivalAirportCode: 'PEW',
      departureAirportCode: 'ISB',
      travelDate: '2024-07-10',
      price: 4800,
      action: 'Book Now'
    },
    { 
      airline: 'Shaheen Air International',
      arrivalAirportCode: 'KHI',
      departureAirportCode: 'LHE',
      travelDate: '2024-07-15',
      price: 4200,
      action: 'Book Now'
    },
    { 
      airline: 'Pakistan Air Force (PAF)',
      arrivalAirportCode: 'MUX',
      departureAirportCode: 'PEW',
      travelDate: '2024-07-20',
      price: 5500,
      action: 'Book Now'
    }
  ];
  

  constructor(private router: Router) {}

  newairline: string = ''; 
  newarrivalairport: string=''; 
  newdepartureairport: string=''; 
  newtraveldate: string = ''; 
  newprice: number = 0; 
  newaction: string = ''; 

  addAirport(): void {
    if (this.isValidInput()) {
      const newFlight = { 
        airline: this.newairline,
        arrivalAirportCode: this.newarrivalairport,
        departureAirportCode: this.newdepartureairport,
        travelDate: this.newtraveldate,
        price: this.newprice,
        action: this.newaction
      };

      this.flightsList.push(newFlight);

      this.resetInputs();
    }
  }

  isValidInput(): boolean {
    return (
      this.newairline.trim() !== '' &&
      this.newarrivalairport.trim() !== ''&&
      this.newdepartureairport.trim() !== '' &&
      this.newtraveldate.trim() !== '' &&
      this.newprice > 0 &&
      this.newaction.trim() !== ''
    );
  }

  resetInputs(): void {
    this.newairline = ''; 
    this.newarrivalairport = ''; 
    this.newdepartureairport = ''; 
    this.newtraveldate = ''; 
    this.newprice = 0; 
    this.newaction = ''; 
  }

}
