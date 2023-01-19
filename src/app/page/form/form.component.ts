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
    if(this.form.valid){/* condiciona si se ejecuta la funcion */
      let listaUser=JSON.parse(localStorage.getItem('user') || '{}');
      listaUser.push({name:this.form.value.user, pass:this.form.value.pass})/* crea un nuevo usuario */
      localStorage.setItem('user',JSON.stringify(listaUser))/* sobrescribe el local storage con el nuevo user*/
      this.usuario=this.form.value /* almacena el nuevo user añadido*/
      this.form.reset()
      localStorage.setItem('complete','true')/* valor para que su guard no se ejecute si se registro un user */
    }

  }
  cambio(){
    localStorage.setItem('complete','false')/* funcion para que cuando el usuario modifique un input el guard se active si sale de la pagina */
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
