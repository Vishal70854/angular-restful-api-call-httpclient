import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          console.log('Response:', data);
        },
        error: (err) => {
          console.error('Error:', err);
        }
      });
  }
}
