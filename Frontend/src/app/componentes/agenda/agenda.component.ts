import { Component, OnInit } from '@angular/core';
import { DynamicDatePipe } from '../../pipes/dynamic-date.pipe';

@Component({
    selector: 'app-agenda',
    templateUrl: './agenda.component.html',
    styleUrls: ['./agenda.component.css'],
    providers: [DynamicDatePipe]
})
export class AgendaComponent implements OnInit {

    currentDate!: Date;
    daysInMonth!: number[];
    selectedDay: number | null = null;

    ngOnInit(): void {
        this.updateCurrentDate();
        this.generateCalendar();
    }

    updateCurrentDate(): void {
        this.currentDate = new Date();
    }

    generateCalendar(): void {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const lastDay = new Date(year, month + 1, 0).getDate();
        this.daysInMonth = Array.from({ length: lastDay }, (_, index) => index + 1);
    }

    selectDay(day: number): void {
        this.selectedDay = day;
    }

    // Función para avanzar un mes
    nextMonth(): void {
        this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        this.generateCalendar();
    }

    // Función para retroceder un mes
    prevMonth(): void {
        this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        this.generateCalendar();
    }

    // Función para avanzar un año
    nextYear(): void {
        this.currentDate.setFullYear(this.currentDate.getFullYear() + 1);
        this.generateCalendar();
    }

    // Función para retroceder un año
    prevYear(): void {
        this.currentDate.setFullYear(this.currentDate.getFullYear() - 1);
        this.generateCalendar();
    }
}
