import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value:any, arg:any): any{
    if (arg === '' || arg.length < 1) return arg;
    let resultPosts = [];
    for (const item of value) {
      if (item.responsable_directo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||item.activo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultPosts.push(item);
      };
 };
    return resultPosts;
  }

}