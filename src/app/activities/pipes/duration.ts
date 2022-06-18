import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    transform(value: any[], index: number): string {
        const diff = this.getDataDiff(new Date(value[index].timestamp), new Date(value[index + 1].timestamp));
        let finalDuration = '';

        if (diff.hour) {
            finalDuration += `${diff.hour}h`;
        }

        if (diff.minute) {
            finalDuration += ` ${diff.minute}min`;
        }

        return finalDuration;
    }

    private getDataDiff(startDate: Date, endDate: Date) {
        var diff = endDate.getTime() - startDate.getTime();
        var days = Math.floor(diff / (60 * 60 * 24 * 1000));
        var hours = Math.floor(diff / (60 * 60 * 1000)) - (days * 24);
        var minutes = Math.floor(diff / (60 * 1000)) - ((days * 24 * 60) + (hours * 60));
        var seconds = Math.floor(diff / 1000) - ((days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60));
        return { day: days, hour: hours, minute: minutes, second: seconds };
    }
}