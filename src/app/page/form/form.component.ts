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
      listaUser.push({name:this.form.value.name, pass:this.form.value.pass})/* crea un nuevo usuario */
      localStorage.setItem('user',JSON.stringify(listaUser))/* sobrescribe el local storage con el nuevo user*/
      this.usuario=this.form.value /* almacena el nuevo user añadido*/
      Swal.fire({
        icon:'success',
        title:'Registro exitoso',
        heightAuto:false
      })
      this.cambio() /* verifica si se registro el usuario */
      this.form.reset()
    }else{
      Swal.fire({
        icon:'error',
        title:'Registro fallido',
        heightAuto:false
      })
      this.cambio()/* verifica si se registro el usuario */
    }
    

  }
  cambio(){
    /* verifica si los campos fueron llenados------------------------- */
    let camposFalta=0
    if(this.form.get('name')?.value=='' || this.form.get('name')?.value==null) camposFalta++
    if(this.form.get('user')?.value=='' || this.form.get('user')?.value==null) camposFalta++
    if(this.form.get('email')?.value=='' || this.form.get('email')?.value==null) camposFalta++
    if(this.form.get('pass')?.value=='' || this.form.get('pass')?.value==null) camposFalta++
    if(this.form.get('pass2')?.value=='' || this.form.get('pass2')?.value==null) camposFalta++
    /* verifica si el usuario por registrar fue registrado exitosamente*/
    let bd=JSON.parse(localStorage.getItem('user')||'{}')
    for(let i of bd){
      if(this.form.value.name==i.name && this.form.value.pass==i.pass){
        localStorage.setItem('complete',`{"campos":${camposFalta},"reg":true}`)
        break
      }
      else{
        localStorage.setItem('complete',`{"campos":${camposFalta},"reg":false}`)
      }
    }
    
  }
  
  ngOnInit(): void {
    /* formulario reactivo */
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
