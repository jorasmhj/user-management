import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPeople'
})
export class SortPeoplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.sort(function(a, b){
        if(a.name < b.name) return -1;
        if(a.name > b.name) return 1;
        return 0;
    })
  }

}
