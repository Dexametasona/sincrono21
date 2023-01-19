import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  master=[{name:'master', pass:'1234'}]
  constructor(private route:Router){}
  logout(){
    let estado=JSON.parse(localStorage.getItem('logeado')||'{}')
    if(estado.status){
      Swal.fire({
          title: 'Seguro que desea cerrar sesión',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si',
          heightAuto:false
        }).then((result) => {
          if (result.isConfirmed){
            localStorage.setItem('logeado','{"status":false}')
            localStorage.setItem('complete','{"campos":0,"reg":true}')
            this.route.navigate(["/login"])
          }
      })  
    }else{
      Swal.fire({
        icon:'question',
        title:'No hay usuario logeado',
        heightAuto:false
      })
    }
  }

  ngOnInit(): void {
    let user=JSON.parse(localStorage.getItem('user')||'[{}]')
    let presente=true
    for(let i of user){
      if(i.name=='master' && i.pass=='1234'){
        presente=true
        break
      }
      else presente=false
      if(presente==false){
        localStorage.setItem('user',JSON.stringify(this.master))
      }
    }
  
  }
}
