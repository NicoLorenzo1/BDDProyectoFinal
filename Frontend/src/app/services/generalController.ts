import { Injectable } from '@angular/core';
import { Funcionario } from '../clases/funcionario';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class generalController {

  private readonly apiUrl = environment.apiUrl;

  fechaTest: Date = new Date(1995, 11, 8) //FECHA DE PRUEBA GENERADA PARA PODER CREAR FUNCIONARIOS
  funcionarios: Funcionario[] = [

    { ci: 48477706, nombre: 'Jose', apellido: 'Varela', fechaNacimiento: this.fechaTest, direccion: 'Av. Centenario 2023', telefono: '095554795', email: 'pepito@gmail.com', logid: 12345 },
    //AGREGAR MAS FUNCIONARIOS
  ];

  logueado: boolean = false; //BOOLEANO QUE INDICA SI ESTAS LOGUEADO O NO CON UN USUARIO DE LA BDD

  constructor(private http: HttpClient) { }

  listarFuncionarios() {
    return this.funcionarios;
  }

  logeado() {
    this.logueado = true;
  }

  desloguearse() {
    this.logueado = false;
  }

  //loguea al usuario 
  login(ci: number, password: string) {
    const body = { ci, password };
    return this.http.post<any>(this.apiUrl + '/login', body);
  }

  //registra el usuario y completa la tabla funcionario 
  Register(name: string, surname: string, ci: number, birthdate: Date, phone: number, adress: string, email: string, password: string) {
    const body = { name, surname, ci, birthdate, adress, phone, email, password };
    console.log("llego a controller!############################# " + this.apiUrl + '/register');


    return this.http.post<any>(this.apiUrl + '/register', body);
  }

  //completa el formulario de la tabla carnet_Salud
  postForm(ci: number, issueDate: Date, expirationDate: Date, proof: Blob) {
    const body = { ci, issueDate, expirationDate, proof };

    return this.http.post<any>(this.apiUrl + '/postHealthCard', body);
  }
}
