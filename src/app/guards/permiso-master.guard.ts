import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
/* guard para que solo el usuario master pueda añadir nuevos usuarios */
export class PermisoMasterGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.login()) return true;
    else {
      Swal.fire({
        icon:'info',
        title:'Acceso solo para el Admin',
        heightAuto:false
      })
      return false
    }
  }

  login(){/* validacion para diferencia si el master esta logeado */
    let statusValidate=JSON.parse(localStorage.getItem('logeado') || '{}');
    if(statusValidate.name=='master') return true
    else return false
  }
  
}