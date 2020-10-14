import {PipeTransform, Pipe} from "@angular/core";

@Pipe({ name: 'stripHtml'})
export class StripHtmlPipe implements PipeTransform  {

  constructor() {}

  transform(value) {
    return value.replace(/<[^>]*>/g, '');
  }
}
