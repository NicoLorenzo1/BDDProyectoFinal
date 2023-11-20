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
  data: Login = { ci: 0, password: "" };

  constructor(private controlador: generalController, private fb: FormBuilder, private router: Router) {
    this.formLogin = this.fb.group({
      ci: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  saveData() {
    this.data = {
      ci: this.formLogin.get('ci')?.value,
      password: this.formLogin.get('password')?.value,
    };
  }

  login() {
    this.controlador.login(this.data.ci, this.data.password).subscribe({
      next: (response) => {

        if (response.msg === "logueado correctamente!!") {
          this.router.navigate(['/main']);

        } else {
          alert("Datos incorrectos!!");
        }
      },
      error: (error) => {
        alert("Datos incorrectos!!");
        console.error(error);
        // Manejar errores si es necesario
      }
    });
  }
}