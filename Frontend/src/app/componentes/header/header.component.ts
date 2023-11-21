import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { generalController } from 'src/app/services/generalController';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mostrarBotonInicio = false;
  mostrarBotonesMain = false;

  constructor(private router: Router, private controlador:generalController) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const rutaActual = this.router.url;
        this.mostrarBotonInicio = rutaActual === '/inicio' || rutaActual === '/registro';
        this.mostrarBotonesMain = rutaActual === '/main' || rutaActual === '/list' 
        || rutaActual === '/agenda' || rutaActual === '/periodo' ;
      }
    });
  }

  salir(){
    this.controlador.desloguearse();
    this.router.navigate(["inicio"]);
  }
}
