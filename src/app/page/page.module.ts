import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RespuestaComponent } from './respuesta/respuesta.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule  } from '@angular/material/icon';





@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RespuestaComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    FormsModule,
    MatIconModule
  ],
  exports:[
    HomeComponent,
    LoginComponent,
    RespuestaComponent,
    FormComponent
  ]
})
export class PageModule { }
