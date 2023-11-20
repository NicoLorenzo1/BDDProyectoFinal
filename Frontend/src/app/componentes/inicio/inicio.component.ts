import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generalController } from 'src/app/services/generalController';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  formLogin: FormGroup;
  resultados: any[] = [];


  constructor(private controlador: generalController, private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      ci: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const FORM: Login = {
      ci: this.formLogin.get('ci')?.value,
      password: this.formLogin.get('password')?.value,
    }

    this.controlador.login(FORM.ci, FORM.password).subscribe({
      next: (data) => {
        // Manejar la respuesta aquí
        alert('Login: ' + JSON.stringify(data));
        this.router.navigate(['/main']);
      },
      error: (error) => {
        alert("Datos incorrectos!!");
        console.error(error);
        // Manejar errores si es necesario
      }
    });
  }

  //muestra en consola todos los usuarios que estan registrados en la tabla funcionario pero aun no llenaron el formulario de CDS
  usersNotForm() {
    this.controlador.usersNotForm().subscribe(
      data => {
        this.resultados = data;
        this.resultados.forEach(element => {
          element.forEach((user: any) => {
            const nombre = user.Nombre;
            const apellido = user.Apellido;
            const ci = user.CI;
            console.log(`Nombre: ${nombre}, Apellido: ${apellido}, CI: ${ci}`);

          })
        });
      },
      error => {
        console.error('Error al llamar al servidor:', error);
      }
    );
  }
}