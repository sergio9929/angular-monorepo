import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  constructor() {}

  dateToString(date: Date, uppercase?: boolean) {
    const formatOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    const string = date.toLocaleString('es', formatOptions);
    if (!uppercase) return string;
    return string[0].toUpperCase() + string.slice(1);
  }

  simpleDateFormat(date: Date) {
    return date.toISOString().split('T')[0];
  }

  addOneDay(date: Date) {
    date.setDate(date.getDate() + 1);
    return date;
  }
}
