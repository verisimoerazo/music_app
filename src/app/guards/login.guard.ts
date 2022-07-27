import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router: Router){
    // this.storage.create();
  }
  async canActivate(){
    const { value } = await Storage.get({key: "isUserLoggedIn"});
    if ( value == 'true' ) {
      return true;
    }else{
      this.router.navigateByUrl("/login")
    }
  }
  
}