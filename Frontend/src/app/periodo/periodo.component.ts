import { Component } from '@angular/core';
import { generalController } from '../services/generalController';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent {

  public constructor(private controller: generalController) { }

  dropdownNames: string[] = ['Año:', 'Período:', 'Fecha Inicio:', 'Fecha Fin:'];
  tempDropdownValues: string[] = ['', '', ''];
  tempDateValues: string[] = ['', '', ''];
  options: string[][] = [
    ['2023', '2024', '2025'],
    ['1er Semestre', '2do Semestre'],
    ['Rojo', 'Azul', 'Verde'],
    ['Uno', 'Dos', 'Tres', 'Cuatro']
  ];



  postPeriodo() {
    const year = this.tempDropdownValues[0];
    const periodo = this.tempDropdownValues[1];
    const startDate = new Date(this.tempDateValues[2]);
    const finishDate = new Date(this.tempDateValues[3]);


    this.controller.postPeriod(year, periodo, startDate, finishDate).subscribe({
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

