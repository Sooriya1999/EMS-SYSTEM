import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private http:HttpClientModule) { }
  username='';
  password='';
  poster(){
   alert(this.username)
  }
  ngOnInit(): void {
  }

}
