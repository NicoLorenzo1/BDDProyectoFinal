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
  showAgendaInfo: boolean = false;
  userGenderInfo: Date = new Date();
  userCSInfo: any[] = []
  getCS: boolean = false;
  getAgenda: boolean = false;
  withinDate: boolean = false;

  async ngOnInit() {
    if (this.controlador.currentUserCi == 1010) {
      this.controlador.soyAdmin = true;
      this.showAdmin = true;
    } else {
      try {
        await this.getHealthCard(this.currentCI);
        console.log("Valor getCS1: ", this.getCS)
        if (this.getCS) {
          console.log("Valor getCS2: ", this.getCS)
          this.showInfo = true;
        } else {
          await this.getPeriod();
          if (this.withinDate) {
            this.showOptions = true;
            let agendaCheck = this.getGenderByCi(this.currentCI);
            if (this.showAgendaInfo) {
              console.log("Info Agenda guardada: ", this.userGenderInfo);
            }
          }

        }
      } catch (error) {
        console.error(error);
        // Handle errors if needed
      }
    }
  }

  async getHealthCard(ci: number) {
    try {
      const data = await this.controlador.getHealthCardByCi(ci).toPromise();
      const proof = data.proof;
      const issueDate = data.issueDate;
      const expireDate = data.expireDate;
      const Ci = data.ci;
      let dato = {
        proof: proof,
        issueDate: issueDate,
        expireDate: expireDate,
        Ci: Ci
      }
      console.log("Cedula Ecnotrada: ", dato)
      let extractedData: any[] = [];
      extractedData.push(dato)
      console.log("Extracted Data:", extractedData)
      this.userCSInfo = extractedData;
      this.getCS = true;
      console.log("Seteo getCS:", this.getCS)
    } catch (error) {
      console.error(error);
      // Handle errors if needed
    }
  }


  async getGenderByCi(ci: number) {
    this.controlador.getGenderByCi(ci).subscribe({
      next: (data) => {

        if (data.found) {
          this.userGenderInfo = data.data.date
          this.showAgendaInfo = true;

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


  async getPeriod() {
    try {
      const data = await this.controlador.getPeriod().toPromise();
      const year = data.year;
      const periodo = data.periodo;
      const startDate = data.startDate;
      const finishDate = data.finishDate;
      let dato = {
        year: year,
        periodo: periodo,
        startDate: startDate,
        finishDate: finishDate
      }
      console.log("Periodo encontrado: ", dato)
      let extractedData: any[] = [];
      extractedData.push(dato)

    } catch (error) {
      console.error(error);
      // Handle errors if needed
    }
  }

}
