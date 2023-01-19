import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!:FormGroup;
  userJson!:any[] /*variable para almacenar la lista de usuarios*/

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      name:[
        '',
        [Validators.required,
        Validators.maxLength(20)]
      ],
      pass:[
        '',
        [Validators.required,
        Validators.minLength(4)]
      ]
    })
  }
  /* funcion para logearse-------------------------------------------------- */
  validar(){
    let user=localStorage.getItem('user')
    if(user!=null) this.userJson=JSON.parse(user)/* convertir la data del localstorage en json y alamcenarlo en el array anteriormente declarado*/
    
    for (let i of this.userJson){
      /* se recorre el array y se comprueba si el user y pass existen*/
      if(i.name==this.form.value.name && i.pass==this.form.value.pass){
        /* se crea un estado del logeo en localstorage */
        let user={
          status:true,
          name:this.form.value.name,
          pass:this.form.value.pass
        }
        localStorage.setItem('logeado',JSON.stringify(user))
        this.form.reset()
        break
      }else{
        /* si no se encuentra el user/pass en el array se crea un status false */
        let user={
          status:false
        }
        localStorage.setItem('logeado',JSON.stringify(user))
      }
    }
    /* condicinal que verifica el estado del logeo y devuelve un alert dependiendo del exito de logeo */
    if((JSON.parse(localStorage.getItem('logeado')||'{}')).status){
      Swal.fire({
        icon:'success',
        title:'Bienvenido',
        heightAuto: false
      })
    }else{
      Swal.fire({
        icon:'error',
        title:'contraseña o username incorrecta',
        heightAuto: false
      })
    }
  }

}
