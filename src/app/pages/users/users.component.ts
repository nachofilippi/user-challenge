import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
} from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { takeUntil } from 'rxjs';
import { Table } from '../../components/table/table.model';
import { formatUsersTable } from '../../components/table/table.helper';
import { User } from '../../../models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class UsersComponent implements OnInit {
  @ViewChild('modalUserDetails') modalUserDetails!: TemplateRef<any>;

  public loadingTable = true;
  public table?: Table;
  public originalTable?: User[];
  public user$?: Observable<User>;

  constructor(
    private usersService: UsersService,
    private readonly unsubscribe$: UnsubscribeService,
    private cdt: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.usersService
      .getAllUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((users) => {
        this.originalTable = users;
        this.table = formatUsersTable(users);
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
      ? formatUsersTable(tableFiltered)
      : undefined;
    this.cdt.detectChanges();
  }

  /**
   * Open a modal with the user details using the user id as parameter to get the user data
   * @param id string
   * @returns void
   */
  openUserDetails(id: string): void {
    this.user$ = this.usersService
      .getUserById(id)
      .pipe(takeUntil(this.unsubscribe$));

    this.dialog.open(ModalComponent, {
      data: {
        template: this.modalUserDetails,
        title: 'User Details',
      },
      width: '100%',
    });
  }
}
