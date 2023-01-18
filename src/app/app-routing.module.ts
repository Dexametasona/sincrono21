import { FormComponent } from './page/form/form.component';
import { HomeComponent } from './page/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { RespuestaComponent } from './page/respuesta/respuesta.component';
import { PermisoGuard } from './guards/permiso.guard';
import { PermisoSalirGuard } from './guards/permiso-salir.guard';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate:[PermisoGuard]},
  {path:'login', component:LoginComponent},
  {path:'rpta', component:RespuestaComponent, canActivate:[PermisoGuard]},
  {path:'form', component:FormComponent, canActivate:[PermisoGuard], canDeactivate:[PermisoSalirGuard]},
  {path:'', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
