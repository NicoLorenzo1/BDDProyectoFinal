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


}
