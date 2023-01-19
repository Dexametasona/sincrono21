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
          this.route.navigate(["/login"])
        }
    })
    
  }

  ngOnInit(): void {
    localStorage.setItem('user',JSON.stringify(this.master))
    localStorage.setItem('complete', 'true')
  
  }
}
