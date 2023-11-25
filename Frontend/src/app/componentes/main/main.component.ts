import { Component, getDebugNode } from '@angular/core';
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
  showInfo: boolean = false;
  showOptions: boolean = false;
  showAdmin: boolean = false;
  showAgendaInfo:boolean = false;
  userGenderInfo: Date = new Date();
  userCSInfo: any [] = []

  ngOnInit() {
    if (this.controlador.currentUserCi == 1010) {
      this.controlador.soyAdmin = true
      this.showAdmin = true;
    }
    else{
      let csCheck = this.getHealthCard(this.currentCI)
    if (csCheck!=null){
      this.userCSInfo.push(csCheck);
      this.showInfo = true;
      this.showOptions = true; // Esto se saca cuando el chequeo de csCheck sea corregido
    }
    else{
      this.showOptions = true;
    }

    let agendaCheck = this.getGenderByCi(this.currentCI);
    if (agendaCheck!=null){
      console.log("Info Agenda guardad: ",this.userGenderInfo);
      this.showAgendaInfo=true;
    }
    }
    
    
  }

  //almacena los datos del carnet de salud si lo encuentra 

  async getHealthCard(ci: number) {
    this.controlador.getHealthCardByCi(ci).subscribe({
      next: (data) => {
        const proof = data.proof;
        const issueDate = data.issueDate;
        const expireDate = data.expireDate;
        const Ci = data.ci;
        let dato = {
          proof:proof,
          issueDate: issueDate,
          expireDate: expireDate,
          Ci: Ci
        }

        let extractedData: any[] = [];
        extractedData.push(dato)
        console.log("Extracted Data:",extractedData)
        this.userCSInfo =extractedData;
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
          this.userGenderInfo=data.Date
          /*
          const genderDate = data.date;
          let dato = {
            agendaDate:genderDate
          }
          let agendaData: any[] = [];
          agendaData.push(dato)
          console.log("creando agendaData: ",agendaData)
          this.userGenderInfo = agendaData;
          */
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
