import { Component } from '@angular/core';

@Component({
  selector: 'app-periodo',
  templateUrl: './periodo.component.html',
  styleUrls: ['./periodo.component.css']
})
export class PeriodoComponent {

  dropdownNames: string[] = ['Año:', 'Período:', 'Fecha Inicio:', 'Fecha Fin:'];
  options: string[][] = [
    ['2023', '2024', '2025'],
    ['1er Semestre', '2do Semestre'],
    ['Rojo', 'Azul', 'Verde'],
    ['Uno', 'Dos', 'Tres', 'Cuatro']
  ];

}
