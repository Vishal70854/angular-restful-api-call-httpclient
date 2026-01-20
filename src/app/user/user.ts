import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User implements OnInit {

  users : any;  // list of users object

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users')
      .subscribe((data)=>this.users=data);
  }
}
