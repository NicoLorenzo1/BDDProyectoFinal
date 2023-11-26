import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { generalController } from 'src/app/services/generalController';
import { csForm } from '../../models/csForm';
import { ValidatorFn } from '@angular/forms';


@Component({
    selector: 'app-cs-form',
    templateUrl: './cs-form.component.html',
    styleUrls: ['./cs-form.component.css']
})
export class CsFormComponent /*implements OnInit*/ {

    formCS: FormGroup;
    isFormValid: boolean = false;
    titulo = 'Formulario Carnet de Salud';
    id: string | null;

    constructor(private fb: FormBuilder, private router: Router, private aRouter: ActivatedRoute, private controlador: generalController) {
        this.formCS = this.fb.group({
            ci: ['', Validators.required],
            fch_Emision: ['', [Validators.required, this.dateNotInFutureValidator]],
            fch_Vencimiento: ['', [Validators.required, this.dateNotInPastValidator]],
            comprobante: ['', [Validators.required, this.fileTypeValidator(['jpg', 'pdf', 'png'])]],
        });


        this.id = this.aRouter.snapshot.paramMap.get('id');

        this.formCS.valueChanges.subscribe(() => {
            this.isFormValid = this.formCS.valid;
            console.log('isFormValid:', this.isFormValid);
        });
    }

    ngOnInit(): void { }

    addForm() {
        const FORM: csForm = {
            ci: this.formCS.get("ci")?.value,
            fch_Emision: new Date(this.formCS.get("fch_Emision")?.value),
            fch_Vencimiento: new Date(this.formCS.get("fch_Vencimiento")?.value),
            comprobante: this.formCS.get("comprobante")?.value,
        }



        this.controlador.postHealthCard(FORM.ci, FORM.fch_Emision, FORM.fch_Vencimiento, FORM.comprobante).subscribe({
            next: (data) => {
                alert('Carnet de salud cargado correctamente');
                this.router.navigate(['/main']);
            },
            error: (error) => {
                console.error(error);
            }
        });
    }

    dateNotInFutureValidator(control: AbstractControl): ValidationErrors | null {
        const selectedDate = new Date(control.value);
        const currentDate = new Date();

        if (selectedDate > currentDate) {
            return { futureDate: true };
        }
        return null;
    }

    dateNotInPastValidator(control: AbstractControl): ValidationErrors | null {
        const selectedDate = new Date(control.value);
        const currentDate = new Date();

        if (selectedDate < currentDate) {
            return { pastDate: true };
        }
        return null;
    }

    fileTypeValidator(allowedTypes: string[]): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const file = control.value;
            if (file) {
                const fileType = file.split('.').pop().toLowerCase();
                if (!allowedTypes.includes(fileType)) {
                    return { invalidFileType: true };
                }
            }
            return null;
        };
    }


}