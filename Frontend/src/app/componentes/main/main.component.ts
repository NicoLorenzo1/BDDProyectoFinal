import { Component } from '@angular/core';
import { ControladorCarnetSalud } from 'src/app/services/controlador-CarnetSalud';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private controlador:ControladorCarnetSalud){}

result:string = 'Tenes Carnet al día';
}
