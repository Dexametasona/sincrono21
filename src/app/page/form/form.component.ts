import  Swal  from 'sweetalert2';
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
      Swal.fire({
        icon:'success',
        title:'Registro exitoso',
        heightAuto:false
      })
    }else{
      Swal.fire({
        icon:'error',
        title:'Registro fallido',
        heightAuto:false
      })
    }
    this.cambio()
    this.form.reset()

  }
  cambio(){
    
    let camposFalta=0
    if(this.form.get('name')?.value=='') camposFalta++
    if(this.form.get('user')?.value=='') camposFalta++
    if(this.form.get('email')?.value=='') camposFalta++
    if(this.form.get('pass')?.value=='') camposFalta++
    if(this.form.get('pass2')?.value=='') camposFalta++

    let bd=JSON.parse(localStorage.getItem('user')||'{}')
    for(let i of bd){
      if(this.form.value.name==i.name && this.form.value.pass==i.pass){
        localStorage.setItem('complete',`{'campos':${camposFalta},'reg':true}`)
      }
      else{
        localStorage.setItem('complete',`{'campos':${camposFalta},'reg':false}`)
      }
    }
    
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
    this.cambio()
  }

}
