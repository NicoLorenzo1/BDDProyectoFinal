import { Injectable } from '@angular/core';
import { Funcionario } from '../clases/funcionario';
import { HttpClient } from '@angular/common/http';
import { InicioComponent } from '../componentes/inicio/inicio.component';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class generalController {

  private readonly apiUrl = environment.apiUrl;

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

  //loguea al usuario 
  login(ci: number, password: string) {
    const body = { ci, password };
    console.log("llego a service!############################# " + ci + password);
    return this.http.post<any>(this.apiUrl + '/login', body);
  }


logeado(){
  this.logueado = true;
}

desloguearse(){
  this.logueado = false;
}

//-----------------------------------



  //devuelve la informacion de la tabla logins
  getLoginsInfo() {
    console.log("login info service print" + this.apiUrl + '/loginInfo');
    return this.http.get<boolean>(this.apiUrl + '/loginInfo');
  }


  





  //registra el usuario y completa la tabla funcionario 
  Register(ci: number, name: string, surname: string, birthdate: Date, adress: string, phone: number, email: string, password: string) {
    const body = { ci, name, surname, birthdate, adress, phone, email, password };
    console.log("llego a service!############################# ");

    return this.http.post<any>(this.apiUrl + '/register', body);
  }

  //completa el formulario de la tabla carnet_Salud
  postForm(ci: number, issueDate: Date, expirationDate: Date, proof: Blob) {
    const body = { ci, issueDate, expirationDate, proof };
    console.log("llego a service!############################# ");

    return this.http.post<any>(this.apiUrl + '/postHealthCard', body);
  }


}
