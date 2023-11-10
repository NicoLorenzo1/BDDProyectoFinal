import { Injectable } from '@angular/core';
import { Funcionario } from '../clases/funcionario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ControladorCarnetSalud {

  fechaTest: Date= new Date(1995,11,8) //FECHA DE PRUEBA GENERADA PARA PODER CREAR FUNCIONARIOS
  funcionarios: Funcionario[] = [

    { ci:48477706, nombre:'Jose', apellido:'Varela', fechaNacimiento: this.fechaTest, direccion: 'Av. Centenario 2023', telefono: '095554795', email:'pepito@gmail.com', logid: 12345 },
    //AGREGAR MAS FUNCIONARIOS
  ];
    


logueado: boolean = false; //BOOLEANO QUE INDICA SI ESTAS LOGUEADO O NO CON UN USUARIO DE LA BDD


constructor(private http: HttpClient) { }



crearFuncionario(ci:number, nombre:string, apellido:string, fechaNacimiento: Date, direccion: string, telefono: string, email:string, logid: number){
  //LOGICA PARA CREAR UN NUEVO FUNCIONAR A PARTIR DEL FORMULARIO DE REGISTRO
}

getUsuario(nombre: string, contrasenia: string){
  const encontro = this.funcionarios.find(({ ci }) => ci == ci);
  if (encontro != null) {
    this.logueado = true;
    return true
  }
  else {
    return false
  }
}

listarFuncionarios(){
  return this.funcionarios;
}

logeado(){
  this.logueado = true;
}

desloguearse(){
  this.logueado = false;
}

}
