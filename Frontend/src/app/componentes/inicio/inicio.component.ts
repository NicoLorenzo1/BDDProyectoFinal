import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

}
function login() {
  // Lógica para el inicio de sesión
  alert('¡Login ejecutado!');
}

function registro() {
  // Lógica para el registro
  alert('¡Registro ejecutado!');
}