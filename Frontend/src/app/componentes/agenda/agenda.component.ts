import { Component, OnInit } from '@angular/core';
import * as moment from 'moment-timezone';

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
        if (this.selectedDay === day) {
            // Si se hace clic en el mismo día, deselecciona el día
            this.selectedDay = null;
        } else {
            // Si se hace clic en un día diferente, selecciona ese día
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            this.currentDate = new Date(year, month, day);
            this.selectedDay = day;
            // Puedes realizar aquí las acciones adicionales si es necesario al seleccionar un día
        }
    }

    isFechaSeleccionada(): boolean {
        return this.selectedDay !== null;
    }

    guardarFecha(): void {
        if (this.selectedDay !== null) {
            // Verifica si ya hay una fecha guardada en el día seleccionado
            if (this.fechaSeleccionada !== null) {
                const year = this.currentDate.getFullYear();
                const month = this.currentDate.getMonth();
                const existingDate = new Date(year, month, this.selectedDay);
    
                // Compara la fecha seleccionada con la fecha ya guardada
                if (this.isSameDay(existingDate, this.fechaSeleccionada)) {
                    console.log('Ya hay una fecha guardada en este día.');
                    return; // Si ya hay una fecha guardada en el mismo día, sale de la función
                }
            }
    
            // Si no hay fecha guardada para este día o son fechas diferentes, guarda la nueva fecha
            const year = this.currentDate.getFullYear();
            const month = this.currentDate.getMonth();
            const selectedDate = new Date(year, month, this.selectedDay);
            this.fechaSeleccionada = selectedDate;
            console.log('Fecha guardada:', this.fechaSeleccionada);
        }
    }
    
    // Método para verificar si dos fechas son del mismo día
    isSameDay(date1: Date, date2: Date): boolean {
        return date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate();
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
}
