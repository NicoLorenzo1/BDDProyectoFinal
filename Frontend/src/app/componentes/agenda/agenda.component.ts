import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';
import { Observable, map } from 'rxjs';
import { Gender } from 'src/app/models/gender';
import { generalController } from 'src/app/services/generalController';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

    titulo = 'Agenda';
    currentDate!: Date;
    daysInMonth!: number[];
    selectedDay: number | null = null;
    fechaSeleccionada: Date | null = null;
    public genderNumber: number = 0;

    fechaPasada: boolean = false;

    constructor(private controller: generalController) {
    }

    ngOnInit(): void {
        this.updateCurrentDateMontevideo();
        this.generateCalendar();
    }

    updateCurrentDateMontevideo(): void {
        const montevideoTimezone = 'America/Montevideo';
        this.currentDate = moment.tz(moment(), montevideoTimezone).toDate();
    }

    generateCalendar(): void {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        this.daysInMonth = Array.from({ length: lastDay }, (_, index) => index + 1);
    }

    selectDay(day: number): void {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const selectedDate = new Date(year, month, day);

        // Verifica si la fecha seleccionada es anterior a la fecha actual
        if (selectedDate < new Date()) {
            this.fechaPasada = true;
            this.selectedDay = day; // Selecciona el día, aunque esté en el pasado, para mostrarlo en rojo
            return;
        }

        this.fechaPasada = false;
        if (this.selectedDay === day) {
            // Si se hace clic en el mismo día, deselecciona el día
            this.selectedDay = null;
        } else {
            // Si se hace clic en un día diferente, selecciona ese día
            this.currentDate = new Date(year, month, day);
            this.selectedDay = day;
            // Puedes realizar aquí las acciones adicionales si es necesario al seleccionar un día
        }
    }

    isFechaSeleccionada(): boolean {
        return this.selectedDay !== null;
    }


    nextMonth(): void {
        this.currentDate = moment(this.currentDate).add(1, 'month').toDate();
        this.generateCalendar();
    }

    prevMonth(): void {
        this.currentDate = moment(this.currentDate).subtract(1, 'month').toDate();
        this.generateCalendar();
    }

    nextYear(): void {
        this.currentDate = moment(this.currentDate).add(1, 'year').toDate();
        this.generateCalendar();
    }

    prevYear(): void {
        this.currentDate = moment(this.currentDate).subtract(1, 'year').toDate();
        this.generateCalendar();
    }

    isFechaValida(day: number): boolean {
        if (day === null) {
            return false; // Si no se ha seleccionado un día, se considera inválido
        }
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const selectedDate = new Date(year, month, day);
        console.log("isfechavalida####" + selectedDate)
        return selectedDate >= new Date(); // Retorna verdadero si la fecha es mayor o igual al día actual
    }

    guardarFecha(): void {
        this.controller.checkDate(this.currentDate).subscribe({
            next: (dateExists) => {
                if (dateExists) {
                    alert("Ya hay una fecha seleccionada ese día, selecciona otra fecha diferente.");
                    return;
                }
                else {
                    // Si no hay fecha guardada para este día, guarda la nueva fecha
                    this.controller.saveDate(this.currentDate).subscribe(
                        () => {
                            alert("Agendado con éxito con la Ci: " + this.controller.currentUserCi + "\npara el día: " + this.currentDate);
                        },
                        (error) => {
                            console.error("Error en saveDate:", error);
                        }
                    );
                }
            },
            error: (error) => {
                console.error("An error occurred:", error);
                console.error("Error details:", error.error);
                // Handle the error as needed
            }
        });
    }
}