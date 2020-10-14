import {DateService} from "../service/date.service";
import {Pipe, PipeTransform} from "@angular/core";
import * as moment from 'moment';

@Pipe({ name: 'formatDate'})
export class FormatDatePipe implements PipeTransform  {

  constructor() {}

  transform(value) {
    return moment(DateService.getDateFromString(value)).format('DD MMM YYYY');
  }
}
