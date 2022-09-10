import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { Moment } from 'moment';

@Pipe({
  name: 'mypipe'
})
export class MyPipePipe implements PipeTransform {

  public transform(
    date: Moment | Date | string | number,
    format: string = 'DD-MM-YYYY HH:mm'
  ): string {
    return moment(date).format(format);
  }

}
