import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalController } from 'src/app/services/generalController';
import { Register } from '../../models/register';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html',
    styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    formRegister: FormGroup;
    isFormValid: boolean = false;
    titulo = 'Register';
    id: string | null;

    constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private controlador: generalController) {
        this.formRegister = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            ci: ['', Validators.required],
            birthdate: ['', Validators.required],
            phone: ['', Validators.required],
            adress: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPass: ['', [Validators.required, Validators.minLength(6)]],
        }, { validators: this.passwordConfirmationValidator });

        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.formRegister.valueChanges.subscribe(() => {
            this.isFormValid = this.formRegister.valid;
        });
    }

    ngOnInit(): void { }

    passwordConfirmationValidator(control: AbstractControl): ValidationErrors | null {
        const password = control.get('password');
        const confirmPass = control.get('confirmPass');

        if (password && confirmPass && password.value !== confirmPass.value) {
            return { passwordMismatch: true };
        }
        return null;
    }

    addForm() {
        const FORM: Register = {
            name: this.formRegister.get('name')?.value,
            lastName: this.formRegister.get('lastName')?.value,
            ci: this.formRegister.get("ci")?.value,
            birthdate: this.formRegister.get("birthdate")?.value,
            adress: this.formRegister.get("adress")?.value,
            phone: this.formRegister.get("phone")?.value,
            email: this.formRegister.get('email')?.value,
            password: this.formRegister.get('password')?.value,
            confirmPass: this.formRegister.get('confirmPass')?.value,
        }

        //Llama al controller para post en la base de datos
        this.controlador.Register(FORM.name, FORM.lastName, FORM.ci, FORM.birthdate, FORM.phone, FORM.adress, FORM.email, FORM.password).subscribe({
            next: (data) => {
                // Manejar la respuesta aquí
                alert("Usuario registrado!")
                this.router.navigate(['/inicio']);
            },
            error: (error) => {
                alert("Usuario ya registrado!")
                console.error(error);
                // Manejar errores si es necesario
            }
        });
    }
}

