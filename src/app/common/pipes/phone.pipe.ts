import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: number): string {
    if (phone) {
      return String(phone).replace(/(\d{3})(\d{2})(\d{3})/, '+($1) $2-$3');
    } else {
      return null;
    }
  }
}
