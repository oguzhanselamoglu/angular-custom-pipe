import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  public transform(items: Array<any>,filter: { [key: string]: any }): Array<any>  {
    if (Object.keys(filter).length == 0) return items;
    console.log(filter);

    let filterKeys = Object.keys(filter);

    return items.filter(item => {
      return filterKeys.every(keyName => {
        // console.log(keyName);
        return (
          new RegExp(filter[keyName], 'gi').test(item[keyName]) ||
          filter[keyName] === ''
        );
      });
    });
  }

}
