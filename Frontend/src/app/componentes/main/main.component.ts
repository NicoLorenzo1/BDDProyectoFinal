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
      }
    }
  }

  async getHealthCard(ci: number) {
    console.log("prueba llegada###########")
    try {
      this.controlador.getHealthCardByCi(ci).subscribe({
        next: (data) => {
          console.log("data################ no null" + data.issueDate + data.expireDate + data.ci)
          if (data.issueDate != null && data.expireDate != null && data.ci != null) {
            const issueDate = data.issueDate;
            const expireDate = data.expireDate;
            const Ci = data.ci;
            let dato = {
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
          }

          else {
            console.log("data################ null" + data.issueDate + data.expireDate + data.ci)
            this.showInfo = false;
          }
        }

      });

    } catch (error) {
      console.error(error);
    }
  }


  async getGenderByCi(ci: number) {
    this.controlador.getGenderByCi(ci).subscribe({
      next: (data) => {

        if (data.found) {
          this.userGenderInfo = data.data.date
          this.showAgendaInfo = true;
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
      const data = await this.controlador.getPeriod().subscribe({
        next: (data) => {
          const year = data.latestPeriod.year;
          const periodo = data.latestPeriod.periodo;
          const startDate = data.latestPeriod.startDate;
          const finishDate = data.latestPeriod.finishDate;
        }
      })
    } catch (error) {
      console.error(error);
    }
  }
}

