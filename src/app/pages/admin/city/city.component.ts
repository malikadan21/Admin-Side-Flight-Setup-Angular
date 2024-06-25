import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent{
  
  cityList: string[] = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix'
  ];

  constructor(private router: Router) {}

  newCity: string = ''; 

  addCity(): void {
    if (this.newCity.trim() !== '') {
      this.cityList.push(this.newCity);
      this.newCity = ''; 
    }
  }

}
