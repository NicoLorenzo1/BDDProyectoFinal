import { Component } from '@angular/core';
import { ControladorCarnetSalud } from 'src/app/services/controlador-CarnetSalud';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
constructor(private controlador:ControladorCarnetSalud){}

login(logid: number, contrasenia: string) {
  let logok = this.controlador.login(logid,contrasenia)
  if(logok){
    alert("Login ejecutado correctamente")
  }
  else{
    alert("Credenciales incorrectas")
  }
}

registro() {
  // Lógica para el registro
  alert('¡Registro ejecutado!');
}
}