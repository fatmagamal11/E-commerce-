import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const authGuard: CanActivateFn = (route, state) => {
 let _LoginService= inject(LoginService)
 let _Router= inject(Router)
 if( _LoginService.isLoggedIn()){

   return true;
 }else 
 {
  _Router.navigateByUrl('/auth/login')
   return false;
 }
};
