import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
/* guard para el form en caso que el usuario que ha modificado el form */
export class PermisoSalirGuard implements CanDeactivate<boolean>{
  canDeactivate(component: boolean, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot | undefined): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('complete')==='true') return true
    else {
      return Swal.fire({
        title: 'Seguro que desea salir sin completar el formulario',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        heightAuto:false
      }).then((result) => {
        if (result.isConfirmed){
          return true
        }else return false
      }    
      )
    }
  }
  }
    
  
