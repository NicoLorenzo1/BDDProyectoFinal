import { Component } from '@angular/core';
import { generalController } from 'src/app/services/generalController';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  constructor(private controlador: generalController) { }

  login() {
    this.controlador.login(54332612, "123456").subscribe({
      next: (data) => {
        // Manejar la respuesta aquí
        alert('Login: ' + JSON.stringify(data));
      },
      error: (error) => {
        console.error(error);
        // Manejar errores si es necesario
      }
    });
  }
}