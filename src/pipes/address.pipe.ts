/* eslint-disable @typescript-eslint/no-explicit-any */
import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../models/user.model';

@Pipe({
  name: 'address',
  pure: false,
})
export class AddressPipe implements PipeTransform {
  public transform(address: Address): any {
    return `${address.street}, ${address.suite}, ${address.city}, ${address.zipcode}`;
  }
}
