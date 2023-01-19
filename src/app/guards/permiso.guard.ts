import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
/* guard para la ruta home y post */
export class PermisoGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.login()) return true;
    else {
      /* alerta en caso que un usuario no logeado trate de ingresar */
      Swal.fire({
        icon:'info',
        title:'Acceso solo para usuarios logeados',
        heightAuto:false
      })
      return false
    }
  }

  login(){/* valida si el usuario esta registrado */
    let statusValidate=JSON.parse(localStorage.getItem('logeado') || '{}');
    if(statusValidate.status) return true
    else return false
  }
  
}
