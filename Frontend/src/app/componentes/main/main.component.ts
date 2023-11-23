import { Component } from '@angular/core';
import { IonRadio } from '@ionic/angular';
import { generalController } from 'src/app/services/generalController';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private controlador: generalController) { }

  result: string = 'Tenes Carnet al día';
  currentCI: number = this.controlador.currentUserCi

  userData: any[] = []
  showInfo: boolean = true;
  showOptions: boolean = true;
  showAdmin: boolean = true;

  ngOnInit() {
    if (this.controlador.currentUserCi == 1010) {
      this.controlador.soyAdmin = true
      this.showAdmin = true;
    }
    let cs: boolean = false;
  }

  //almacena los datos del carnet de salud si lo encuentra 

  async getHealthCard(ci: number) {
    this.controlador.getHealthCardByCi(ci).subscribe({
      next: (data) => {
        const proof = data.proof;
        const issueDate = data.issueDate;
        const expireDate = data.expireDate;
        const Ci = data.ci;
      },
      error: (error) => {
        console.error(error);
        // Manejar errores si es necesario
      }
    });
  }

  async getGenderByCi(ci: number) {
    this.controlador.getGenderByCi(ci).subscribe({
      next: (data) => {

        if (data.found) {
          console.log("prueba encontrado")
        }
        else {
          console.log("prueba no encontrado")
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }


}
