import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public form!:FormGroup
  usuario={}
  

  constructor(private fb:FormBuilder) { }
  registrar(){
    if(this.form.valid){
      let listaUser=JSON.parse(localStorage.getItem('user') || '{}');
      listaUser.push({name:this.form.value.user, pass:this.form.value.pass})
      localStorage.setItem('user',JSON.stringify(listaUser))
      this.usuario=this.form.value
      this.form.reset()
      localStorage.setItem('complete','true')
    }

  }
  cambio(){
    localStorage.setItem('complete','false')
  }
  ngOnInit(): void {
    this.form=this.fb.group({
      name:[
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      user:[
        '',
        [
          Validators.required
        ]
      ],
      email:[
        '',
        [
          Validators.email,
          Validators.required
        ]
      ],
      pass:[
        '',
        [Validators.required,
        Validators.minLength(4)]
      ],
      pass2:[
        '',
        [
          Validators.required
        ]
      ]
      
    })
  }

}
