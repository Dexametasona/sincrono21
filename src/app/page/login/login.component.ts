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
  userJson!:any[]
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
  validar(){
    let user=localStorage.getItem('user')
    if(user!=null) this.userJson=JSON.parse(user)
    for (let i of this.userJson){
      if(i.name==this.form.value.name && i.pass==this.form.value.pass){
        let user={
          status:true,
          name:this.form.value.name,
          pass:this.form.value.pass
        }
        localStorage.setItem('logeado',JSON.stringify(user))
        this.form.reset()
        break
      }else{
        let user={
          status:false
        }
        localStorage.setItem('logeado',JSON.stringify(user))
      }
    }
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
