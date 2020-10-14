import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class DateService {

  constructor() { }

  public static getDateFromString(dateStr) {
    if (dateStr.indexOf('-') !== -1) {
      // The ISO 8601 date format is YYYY-MM-DD (optionally followed by the time and timezone).  If you call
      // new Date() with that format, it will adjust the time by the timezone and may give you the wrong day.
      // Creating a new date by parsing for year, month, and day works to give the correct day whether the
      // time and timezone are included or not.
      return new Date(dateStr.substr(0, 4), dateStr.substr(5, 2) - 1, dateStr.substr(8, 2));
    } else if (dateStr == "") {
      return null;
    }
    else {
      // Format should be DD MMM YYYY (standard LDS date display format).  In that format, the time is
      // ignored and you get the correct day.
      return new Date(dateStr);
    }
  }

  public static formatDate(date) {
    if (date) {
      return moment(this.getDateFromString(date)).format('DD MMM YYYY');
    }
    return "";
  }
}
