import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { SearchBarComponent } from '../../components/searchbar/searchbar.component';

@NgModule({
  imports: [
    CommonModule,
    UsersComponent,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
  ],
  providers: [UsersService, UnsubscribeService],
})
export class UsersModule {}
