import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { existEmail } from '../crossFieldValidation/emailvalidation';
import { passwordValidation } from '../crossFieldValidation/matchPassword';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../Services/users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,JsonPipe,HttpClientModule],
  providers:[UsersService],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  standalone:true
})
export class SignUpComponent implements OnInit{
  Data:any[]=[]
  userEmails:string[]=[]
  userRegister:FormGroup
  userid:any
  user:any
  ngOnInit(): void {
    this.userid=this.activeroute.snapshot.paramMap.get('id')
    console.log(this.userid)
    if (this.userid) { 
      console.log(this.userid)
      this.usersData.getUserById(this.userid).subscribe((data) => {
        this.user = data;
        console.log(`User: ${this.user.FullName}`);
        this.userRegister.patchValue(this.user); // تحديث الفورم ببيانات المستخدم
      });
    }
    this.usersData.getAllUsers().subscribe(users=>{
      this.getUserEmails(users)
    })
  }
  constructor(private fb:FormBuilder,private usersData:UsersService,private router:Router,private activeroute:ActivatedRoute){
    
   this.userRegister=fb.group({
    FullName:['',[Validators.required]],
    Email: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,}$')]],
    Age:['',[Validators.required]],
    address:fb.group({
      street:['',[Validators.required]],
     city:['',[Validators.required]]
    }),
    Password:['',[Validators.required]],
    ConfirmPassword:['',[Validators.required]],
    referral:['',[Validators.required]],
    referralothers:[],
    role:['',[Validators.required]]
   },{validators:[existEmail(this.userEmails),passwordValidation()]})
  }
  update()
  {
    console.log("updated")
    this.usersData.updateUser(this.userid,this.userRegister.value).subscribe((data)=>{
      console.log(data)
    })
    this.router.navigateByUrl('/profile')
  }
  get FullName()
  {
    return this.userRegister.get('FullName');
  }
  get Email()
  {
    return this.userRegister.get('Email');
  }
  get Age()
  {
    return this.userRegister.get('Age');
  }
  get address()
  {
    return this.userRegister.get('address')
  }
  get street()
  {
    return this.address?.get('street')||null;
  }
  get city()
  {
    return this.address?.get('city')||null;
  }
  get Password()
  {
     return this.userRegister.get('Password');
  }
  get ConfirmPassword()
  {
    return this.userRegister.get('ConfirmPassword');
  }
  get Refferal()
  {
    return this.userRegister.get('referralothers');
  }
  updateRefferalOthers()
  {
    if(this.userRegister.get('referral')?.value=="others")
    {
      this.userRegister.get('referralothers')?.addValidators([Validators.required])
    }
    else
    {
      this.userRegister.get('referralothers')?.clearValidators()
    }
    this.userRegister.get('referralothers')?.updateValueAndValidity()
  }

getUserEmails(userData:any)
{
 for(let i=0;i<userData.length;i++)
 {
  this.userEmails.push(userData[i].Email)
 }
 console.log(this.userEmails);
}
  sendRegister()
  {
    
    console.log(this.userRegister.value)
    this.usersData.addUser(this.userRegister.value).subscribe(p=>{
      this.router.navigateByUrl('/')
    });

  }
  
}
