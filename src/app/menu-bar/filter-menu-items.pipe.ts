import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Pipe({
  name: 'filterMenuItems'
})
export class FilterMenuItemsPipe implements PipeTransform {

  transform(items: MenuItem[], token: string | null): MenuItem[] {
    if(!token) {
      return items.filter(item =>  item.label !== 'Logout')
    }
      return items.filter(item =>  item.label !== 'Login')
  }

}
