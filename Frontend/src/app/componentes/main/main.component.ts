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
  userGenderInfo: any [] = []

  ngOnInit() {
    if (this.controlador.currentUserCi == 1010) {
      this.controlador.soyAdmin = true
      this.showAdmin = true;
    }
    let csCheck = this.controlador.getGenderByCi(this.currentCI)
    if (csCheck!=null){
      this.userGenderInfo.push(csCheck)
      console.log("Ingo Carnet: ",csCheck)
    }
  }

 async  checkAgenda() {
    const result = await this.controlador.checkGenderByCi(this.currentCI);
    }

  getAgenda(){
    this.userGenderInfo.push(this.controlador.getGenderByCi(this.currentCI));
      console.log(this.userGenderInfo);
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
          console.log("Agenda encontrada!")
          const genderDate = data.date
        }
        else {
          console.log("Agenda no encontrada")
        }
      },
      error: (error) => {
        console.error(error);
      }
    });
  }

}
