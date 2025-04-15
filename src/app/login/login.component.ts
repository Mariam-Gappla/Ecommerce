import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../Services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [RouterModule,FormsModule,HttpClientModule],
  providers:[UsersService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true
})
export class LoginComponent{
  user:any={};
constructor( private userdata:UsersService) {}
Login(){
  localStorage.setItem("username",this.user.email)
  this.userdata.Login(this.user);
  
}
}
