import { CanActivateFn, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { UsersService } from '../Services/users.service';
@Injectable(
  {providedIn:'root'}
)
export class admin{

constructor(private router:Router){
}
  CanActivateFn():any{
    if (typeof window !== 'undefined') {
      const role = localStorage.getItem('role');
  
      if (role === 'admin') {
        return true;
      } else {
        alert('You are not authorized to access this page!');
        this.router.navigate(['/']);
        return false;
      }
    }
}
}
export const adminGuard: CanActivateFn = (route, state) => {
  
return inject(admin).CanActivateFn();
}
