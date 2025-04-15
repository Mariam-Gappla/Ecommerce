import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../Services/users.service';

@Component({
  selector: 'app-dashboard',
  imports: [HttpClientModule],
  providers:[UsersService],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  allUsers:any
constructor(private userData:UsersService){}
getAllUsers()
{
this.userData.getAllUsers().subscribe((user)=>{
  this.allUsers=user;
})
}
ngOnInit(): void {
  this.getAllUsers()
}
deleteUser(userId:number)
{
 this.userData.deleteUser(userId).subscribe(()=>{
  this.getAllUsers()
 })

}
}
