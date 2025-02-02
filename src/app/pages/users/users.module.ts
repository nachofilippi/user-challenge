import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { SearchBarComponent } from '../../components/searchbar/searchbar.component';
import { TableModule } from '../../components/table/table.module';
import { UserDetailsModule } from './user-details/user-details.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    TableModule,
    CommonModule,
    SearchBarComponent,
    UserDetailsModule,
    MatDialogModule,
    ModalComponent,
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
