import { Component } from '@angular/core';
import { Funcionario } from 'src/app/clases/funcionario';
import { generalController } from 'src/app/services/generalController';

@Component({
  selector: 'app-lista-funcionarios',
  templateUrl: './lista-funcionarios.component.html',
  styleUrls: ['./lista-funcionarios.component.css']
})

export class ListaFuncionariosComponent {
  constructor(private controlador: generalController) { }
  fechaTest: Date = new Date(1995, 11, 8) //FECHA DE PRUEBA GENERADA PARA PODER CREAR FUNCIONARIOS

  resultados: any[] = [];

  funcionarios: any[] = [];

  ngOnInit() {
    this.usersNotForm();
  }
  //muestra en consola todos los usuarios que estan registrados en la tabla funcionario pero aun no llenaron el formulario de CDS
  usersNotForm() {
    let aux: any[] = [];

    this.controlador.usersNotForm().subscribe(
      data => {
        this.resultados = data;
        this.resultados.forEach(element => {
          element.forEach((user: any) => {
            const nombre = user.Nombre;
            const apellido = user.Apellido;
            const ci = user.CI;
            const phone = user.Teléfono;

            let dato = {
              Name: nombre,
              Surname: apellido,
              Ci: ci,
              Phone: phone
            };

            aux.push(dato);
          })
          this.funcionarios = aux;
        });
      },
      error => {
        console.error('Error al llamar al servidor:', error);
      }
    );
  }
}
