import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.model';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(users: User[] | null, value?: string) {
    if (!users || !value) {
      return [];
    } 
    return users.filter((item) => value && item.name.toLowerCase().includes(value))
  }

}
