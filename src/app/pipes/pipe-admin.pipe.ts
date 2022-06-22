import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAdmin'
})
export class PipeAdminPipe implements PipeTransform {

  transform(value:any, arg:any): any{
    if (arg === '' || arg.length < 1) return value;
    let resultAdmin = [];
    for (const item of value) {
      if (item.responsable_directo.toLowerCase().indexOf(arg.toLowerCase()) > -1  || item.proyecto_asignado.toLowerCase().indexOf(arg.toLowerCase()) > -1 ) {
        resultAdmin.push(item);
      };
 };
    return resultAdmin;
  }

}