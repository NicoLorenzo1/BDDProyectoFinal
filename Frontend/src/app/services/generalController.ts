import { Injectable } from '@angular/core';
import { Funcionario } from '../clases/funcionario';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Gender } from '../models/gender';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class generalController {

  private readonly apiUrl = environment.apiUrl;

  logueado: boolean = false; //BOOLEANO QUE INDICA SI ESTAS LOGUEADO O NO CON UN USUARIO DE LA BDD
  public currentUserCi: number = 54332615;
  public soyAdmin: boolean = false;

  funcionarios: Funcionario[] = [];

  constructor(private http: HttpClient) { }

  listarFuncionarios() {
    return this.funcionarios;
  }

  logeado() {
    this.logueado = true;
  }

  checkAdminInit() {
    return this.logueado;
  }

  desloguearse() {
    this.logueado = false;
  }

  //loguea al usuario 
  login(ci: number, password: string) {
    const body = { ci, password };
    this.currentUserCi = ci;
    this.logeado();
    console.log("llego a login service " + (this.apiUrl + '/login'));

    return this.http.post<any>(this.apiUrl + '/login', body);
  }

  //registra el usuario y completa la tabla funcionario 
  Register(name: string, surname: string, ci: number, birthdate: Date, phone: number, adress: string, email: string, password: string) {
    const body = { name, surname, ci, birthdate, adress, phone, email, password };

    return this.http.post<any>(this.apiUrl + '/register', body);

  }
  //devuelve usuarios que no completaron formulario
  usersNotForm() {

    return this.http.get<any>(this.apiUrl + '/usersNotForm');
  }

  //guarda en la base de datos la fecha almacenada 

  saveDate(date: Date): Observable<Gender> {

    const ci = this.currentUserCi;
    const body = { ci, date };
    return this.http.post<Gender>(this.apiUrl + '/saveGender', body)
  }

  checkDate(selectedDate: string | Date): Observable<any> {
    const body = { selectedDate };
    return this.http.post<any>(this.apiUrl + '/checkDate', body);
  }

  postHealthCard(ci: number, issueDate: Date, expirationDate: Date, proof: string) {
    const body = { ci, issueDate, expirationDate, proof };

    return this.http.post<any>(this.apiUrl + '/postHealthCard', body);
  }
}
