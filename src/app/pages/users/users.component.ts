import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TableModule } from '../../components/table/table.module';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { takeUntil } from 'rxjs';
import { Table } from '../../components/table/table.model';
import { formatUserTable } from '../../components/table/table.helper';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/searchbar/searchbar.component';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  imports: [TableModule, CommonModule, SearchBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  public loadingTable = true;
  public table?: Table;
  public originalTable?: User[];

  constructor(
    private usersService: UsersService,
    private readonly unsubscribe$: UnsubscribeService,
    private cdt: ChangeDetectorRef
  ) {}

  public ngOnInit() {
    this.usersService
      .getAllUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((users) => {
        this.originalTable = users;
        this.table = formatUserTable(users);
        this.loadingTable = false;
        this.cdt.markForCheck();
      });
  }

  /**
   * Filter users by name field on the table component using the searchValue from the searchbar component
   * @param searchValue string
   * @returns void
   */
  public filterUsers(searchValue: string): void {
    const tableFiltered =
      this.originalTable?.filter((field) =>
        field.name.toLowerCase().includes(searchValue.toLowerCase())
      ) || [];
    this.table = tableFiltered.length
      ? formatUserTable(tableFiltered)
      : undefined;
    this.cdt.detectChanges();
  }
}
