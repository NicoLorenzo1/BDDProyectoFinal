import { Component } from '@angular/core';
import { Funcionario } from 'src/app/clases/funcionario';
import { ControladorCarnetSalud } from 'src/app/services/controlador-CarnetSalud';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})


export class ListaFuncionariosComponent {
  constructor(private controlador:ControladorCarnetSalud){}
  fechaTest: Date= new Date(1995,11,8) //FECHA DE PRUEBA GENERADA PARA PODER CREAR FUNCIONARIOS

  funcionarios: Funcionario[] = [
      { ci:1, nombre: 'Jose', apellido: 'a', fechaNacimiento:this.fechaTest, direccion:"Centenario", telefono:"095554793",email:"jose@gmail.com",logid:1111},
      { ci:1, nombre: 'Lucas', apellido: 'a', fechaNacimiento:this.fechaTest, direccion:"Garibaldi", telefono:"095554794",email:"jose@gmail.com",logid:2222},
  ];
}
