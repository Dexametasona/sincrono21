import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PermisoGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.login()) return true;
    else {
      alert('Primero debe logearse')
      return false
    }
  }

  login(){
    const name=localStorage.getItem('name');
    const pass=localStorage.getItem('pass')

    if(name=='olluco' && pass=='1234') return true
    else return false
  }
  
}