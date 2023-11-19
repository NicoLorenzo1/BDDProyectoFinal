import { Component } from '@angular/core';
import { generalController } from 'src/app/services/generalController';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
constructor(private controlador:generalController){}

/*
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
*/

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

register() {
  this.controlador.Register(543, "nico", "lorenzo", new Date('1990-01-15'), "8 de octubre", 9225, "lorenzo@gmail", "123456").subscribe({
    next: (data) => {
      // Manejar la respuesta aquí
      alert('Register: ' + JSON.stringify(data));
    },
    error: (error) => {
      console.error(error);
      // Manejar errores si es necesario
    }
  });
}

}