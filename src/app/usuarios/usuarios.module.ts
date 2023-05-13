import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoUsuariosComponent } from './listado-usuarios/listado-usuarios.component';
import { UsuarioService } from './usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    ListadoUsuariosComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    ListadoUsuariosComponent
  ],
  providers:[
    UsuarioService,
    HttpClientModule
  ]
})
export class UsuariosModule { }
