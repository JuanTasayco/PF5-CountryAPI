import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'valoresObjetos'
})
export class ValoresObjetosPipe implements PipeTransform {

  transform(valueObject: any ): any {
   

    return Object.values(valueObject);
  }

}
