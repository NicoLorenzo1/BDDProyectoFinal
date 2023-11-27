import { Component } from '@angular/core';
import { generalController } from '../services/generalController';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent {

  public constructor(private controller: generalController) {

  }

  dropdownNames: string[] = ['Año:', 'Período:', 'Fecha Inicio:', 'Fecha Fin:'];
  year: Date = new Date();
  periodo: string = "";
  startDate: Date = new Date();
  finishDate: Date = new Date();

  options: string[][] = [
    ['2023', '2024', '2025'],
    ['1er Semestre', '2do Semestre'],
    ['Rojo', 'Azul', 'Verde'],
    ['Uno', 'Dos', 'Tres', 'Cuatro']
  ];


  postPeriodo() {
    this.controller.postPeriodo(this.year, this.periodo, new Date(this.startDate), new Date(this.finishDate)).subscribe({
      next: (response) => {
        alert("Periodo modificado correctamente")
      },
      error: (error) => {
        alert("Error al modificar periodo!!");
        console.error(error);
      }
    });
  }
}

