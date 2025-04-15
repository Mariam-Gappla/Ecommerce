import { CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { UsersService } from '../Services/users.service';
@Injectable(
  {providedIn:'root'}
)
export class userAuth{
  constructor(private router:Router){}
  userService = inject(UsersService);
  CanActivateFn():boolean{
    let islogged
  if(window !==undefined)
  {
    islogged=localStorage.getItem('token')
  }
    if(islogged)
    { 
      console.log("authorized")
      return true;
    }
    else
    { 
      console.log("not authorized")
      this.router.navigate(['/'])
      return false;
    }
  }
}
export const userGuard: CanActivateFn = (route, state) => {
  return inject(userAuth).CanActivateFn();
};
