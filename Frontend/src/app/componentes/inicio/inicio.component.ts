import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generalController } from 'src/app/services/generalController';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  formLogin: FormGroup;


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

}