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
export class RegistroComponent implements OnInit{

    formRegister: FormGroup;
    isFormValid: boolean = false;
    titulo = 'Register';
    id: string | null;

    constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private controlador:generalController) {
        this.formRegister = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPass: ['', [Validators.required, Validators.minLength(6)]], }, { validators: this.passwordConfirmationValidator });

        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.formRegister.valueChanges.subscribe(() => {
            this.isFormValid = this.formRegister.valid;
            console.log('isFormValid:', this.isFormValid);
        });
    }

    ngOnInit(): void {}

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
            email: this.formRegister.get('email')?.value,
            password: this.formRegister.get('password')?.value,
            confirmPass: this.formRegister.get('confirmPass')?.value,
        }

        console.log(FORM);

       /*this.controlador.saveQuestion(FORM).subscribe(data => {

            this.router.navigate(['/inicio']);
        })
        */
    }
}
