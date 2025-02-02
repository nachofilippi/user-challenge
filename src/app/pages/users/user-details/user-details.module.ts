import { NgModule } from '@angular/core';
import { UserDetailsComponent } from './user-details.component';
import { CommonModule } from '@angular/common';
import { AddressPipe } from '../../../../pipes/address.pipe';

@NgModule({
  declarations: [UserDetailsComponent],
  imports: [CommonModule, AddressPipe],
  exports: [UserDetailsComponent],
})
export class UserDetailsModule {}
