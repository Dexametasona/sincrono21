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
        localStorage.setItem('logeado','true')
        this.form.reset()
        break
      }else{
        localStorage.setItem('logeado','false')
        Swal.fire({
          icon:'error',
          title:'contraseña o username incorrecta',
          heightAuto: false
        })
      }
    }
    
  }

}
