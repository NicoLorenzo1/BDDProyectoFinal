// dynamic-date.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'dynamicDate'
})
export class DynamicDatePipe implements PipeTransform {
    transform(date: Date | null): string {
        if (!date) return '';

        const now = new Date();
        const isCurrentYear = date.getFullYear() === now.getFullYear();
        const isCurrentMonth = date.getMonth() === now.getMonth();

        if (isCurrentYear && isCurrentMonth) {
            return 'Actual';
        } else {
            return this.formatDate(date);
        }
    }

    private formatDate(date: Date): string {
        const options = { year: 'numeric', month: 'long' } as const;
        return date.toLocaleDateString('es-UY', options);
    }
}

