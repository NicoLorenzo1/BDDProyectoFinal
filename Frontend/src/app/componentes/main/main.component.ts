import { Component } from '@angular/core';
import { generalController } from 'src/app/services/generalController';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(private controlador:generalController){}

result:string = 'Tenes Carnet al día';
currentCI: number = this.controlador.currentUserCi

userData: any [] = []
showInfo: boolean = false;
showOptions: boolean = false;

ngOnInit() {
  let cs: boolean = false;
  this.gerUserInfo();
  if (cs){

  }
  else{
      
  }

}

gerUserInfo(){

}


}
