import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: any, searchText: string): any {
    if (!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }

    return value.filter(x => {
      return ['fullName', 'email'].some(y => {
        return String(x[y])
          .toLowerCase()
          .includes(searchText.toLowerCase());
      });
    });
  }
}
