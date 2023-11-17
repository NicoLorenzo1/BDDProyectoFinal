import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';

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

    constructor(private fb: FormBuilder,
        private router: Router,
        private toastr: ToastrService,
        private _registerService: RegisterService,
        private aRouter: ActivatedRoute) {
        this.formRegister = this.fb.group({
            name: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPass: ['', [Validators.required, Validators.minLength(6)]],
        });
        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.formRegister.valueChanges.subscribe(() => {
            this.isFormValid = this.formRegister.valid;
            console.log('isFormValid:', this.isFormValid);
        });
    }

    ngOnInit(): void {}

    addForm() {
        const FORM: Register = {
            name: this.formRegister.get('name')?.value,
            lastName: this.formRegister.get('lastName')?.value,
            email: this.formRegister.get('email')?.value,
            password: this.formRegister.get('password')?.value,
            confirmPass: this.formRegister.get('confirmPass')?.value,
        }

        console.log(FORM);

        this._registerService.saveQuestion(FORM).subscribe(data => {
            this.toastr.success('La pregunta fue registrado con exito!', 'La pregunta fue Registrado!');
            this.router.navigate(['/inicio']);
        })
    }
}
