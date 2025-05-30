import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // ✅ import FormsModule

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'swLearnTokenAngular';

  username = '';
  password = '';
  token = '';
  profileMessage = '';
  apiUrl = 'http://localhost:5135/api';
  constructor(private http: HttpClient) {}

  login() {
    this.http
      .post<{ token: string }>(this.apiUrl + '/login', {
        username: this.username,
        password: this.password,
      })
      .subscribe({
        next: (res) => {
          this.token = res.token;
          alert('Login successful!');
        },
        error: () => alert('Login failed'),
      });
  }

  getProfile() {
    this.http
      .get<{ message: string }>(this.apiUrl + '/profile', {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .subscribe({
        next: (res) => (this.profileMessage = res.message),
        error: () => alert('Unauthorized or invalid token'),
      });
  }
}
