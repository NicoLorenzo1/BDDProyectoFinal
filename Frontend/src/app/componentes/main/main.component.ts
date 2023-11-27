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
        this.getHealthCard(this.currentCI).then(() => {
          console.log("que mierda hay aca: ",this.getCS)
          if (this.getCS) {
            this.showInfo = true;
          } else {
            this.showOptions = true;
            this.getPeriod().then(() => {
              console.log("bool withinDate ###: ", this.withinDate);
              if (this.withinDate) {
                this.getGenderByCi(this.currentCI).then(() => {
                  if (this.showAgendaInfo) {
                    console.log("Info Agenda guardada: ", this.userGenderInfo);
                  }
                }).catch((error) => {
                  console.error(error);
                });
              }
            }).catch((error) => {
              console.error(error);
            });
          }
        }).catch((error) => {
          console.error(error);
        });
      } catch (error) {
        console.error(error);
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
      const dato = {
        proof: proof,
        issueDate: issueDate,
        expireDate: expireDate,
        Ci: Ci
      };
      console.log("Cedula Encontrada: ", dato);
      const extractedData: any[] = [];
      extractedData.push(dato);
      console.log("Extracted Data:", extractedData);
      this.userCSInfo = extractedData;
      this.getCS = true;
      console.log("Seteo getCS:", this.getCS);
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
      const data = await this.controlador.getPeriod().toPromise();
      const year = data.latestPeriod.year;
      const periodo = data.latestPeriod.periodo;
      const startDate = data.latestPeriod.startDate;
      const finishDate = data.latestPeriod.finishDate;
  
      const currentDate = new Date();
      const startDateObj = new Date(startDate);
      startDateObj.setHours(0, 0, 0);
      const finishDateObj = new Date(finishDate);
      finishDateObj.setHours(23, 59, 59);
  
      if (currentDate >= startDateObj && currentDate <= finishDateObj) {
        this.withinDate = true;
        console.log("La fecha actual está dentro del período.", this.withinDate);
      } else {
        console.log("La fecha actual está fuera del período.");
      }
    } catch (error) {
      console.error(error);
    }
  }
}

