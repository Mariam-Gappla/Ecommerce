import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { existEmail } from '../crossFieldValidation/emailvalidation';
import { passwordValidation } from '../crossFieldValidation/matchPassword';


@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule,JsonPipe],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
  standalone:true
})
export class SignUpComponent {
  userRegister:FormGroup
  constructor(private fb:FormBuilder){
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
    referral:[],
    referralothers:[]
   },{validators:[existEmail(),passwordValidation()]})
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
  sendRegister()
  {
    this.userRegister.updateValueAndValidity();
    console.log(this.userRegister.value)
  }
  
}
