import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount',
})
export class DateCountPipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let todayNoTime: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    var dateDifference = Math.abs(value - todayNoTime);
    const secondsInDay = 86400;
    var dateDifferenceSeconds = dateDifference * 0.001;
    var dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value > todayNoTime) {
      return dateCounter;
    } else {
      return 0;
    }
  }
}
