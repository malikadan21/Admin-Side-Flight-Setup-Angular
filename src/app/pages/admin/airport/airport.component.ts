import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-airport',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './airport.component.html',
  styleUrl: './airport.component.css'
})
export class AirportComponent {
  airportList = [
    { code: 'ISB', name: 'Islamabad International Airport', city: 'Islamabad' },
    { code: 'KHI', name: 'Jinnah International Airport', city: 'Karachi' },
    { code: 'LHE', name: 'Allama Iqbal International Airport', city: 'Lahore' },
    { code: 'MUX', name: 'Multan International Airport', city: 'Multan' },
    { code: 'PEW', name: 'Peshawar International Airport', city: 'Peshawar' }
  ];

  constructor(private router: Router) {}

  newcode: string = ''; 
  newcity: string = ''; 
  newname: string = ''; 
  airportList1: any[][] = [];

  addAirport(): void {
    if ( (this.newcode.trim() !== '') && (this.newcity.trim() !== '') && (this.newname.trim() !== '')) {
      const newAirport = { code: this.newcode,name: this.newname,city: this.newcity};
  
      this.airportList.push(newAirport);
  
      this.newcode = '';
      this.newname = '';
      this.newcity = '';
    }
  }
}
