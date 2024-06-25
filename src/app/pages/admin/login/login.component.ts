import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule} from "@angular/common";
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = ''; 
  password: string = '';

  storedUsers: { email: string, password: string }[] = [
    { email: 'adanmalik@gmail.com', password: '1234' },
    { email: 'user2@example.com', password: 'password2' },
    { email: 'user3@example.com', password: 'password3' },
  ];

  constructor(private router: Router) {}

  onLogin(): void {
    const foundUser = this.storedUsers.find(user => user.email === this.email && user.password === this.password);
    if (foundUser) {
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/admin/airport']); 
    } else {
      alert('Invalid email or password.');
    }

    this.email = ''; 
    this.password = ''; 
  }
}
