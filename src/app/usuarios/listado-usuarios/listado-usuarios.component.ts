import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {



  displayedColumns: string[] = ['id', 'avatar', 'first_Name', 'last_name', 'email'];


  constructor(private usuarioService: UsuarioService){}

  ngOnInit(): void {
    this.usuarioService.listarUsuarios();
  }

  get resultados(){
    return this.usuarioService.resultados;
  }

  get totalRegistros(){
    return this.usuarioService.totalRegistros;
  }

  get registroPorPagina(){
    return this.usuarioService.registrosPorPagina;
  }

  onPaginadoChange(event: PageEvent) {
     let pagina = event.pageIndex;
     let size = event.pageSize;
     pagina++;
     this.usuarioService.listarUsuarios(pagina, size);
    }

}
