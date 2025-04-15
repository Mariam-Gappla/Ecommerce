import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  imports: [HttpClientModule,RouterModule],
  providers:[UsersService],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent implements OnInit{
constructor(private user:UsersService){}
allusers:any[]=[];
userprofile:any
ngOnInit(): void {
  this.user.getAllUsers().subscribe((data)=>{
    let username=localStorage.getItem("username")
    this.allusers=data.filter((elm:any)=>{
      return elm.Email==username
    })
    this.user.getUserById(this.allusers[0]?.id).subscribe((data)=>{
      this.userprofile=data;
    })
  })
}


}
