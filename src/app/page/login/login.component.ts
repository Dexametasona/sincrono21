import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form!:FormGroup;
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
  validar(name:string, passW:string){
    let user='olluco';
    let pass='1234';
    if(name==user && passW==pass){
      localStorage.setItem(name,passW)
      console.log('inicio de sesion exitos')
    }
    
  }

}
