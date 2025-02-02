import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  Observable,
  combineLatest,
  of,
  switchMap,
  takeUntil,
  tap,
  map,
} from 'rxjs';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { formatPostTable } from '../../components/table/table.helper';
import { Table } from '../../components/table/table.model';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../../models/post.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { UsersService } from '../../../services/users.service';
import { User } from '../../../models/user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class PostsComponent {
  @ViewChild('modalPostDetails') modalPostDetails!: TemplateRef<any>;

  public loadingTable = true;
  public table?: Table;
  public originalTable?: Post[];
  public post$?: Observable<Post>;

  constructor(
    private postsService: PostsService,
    private usersService: UsersService,
    private readonly unsubscribe$: UnsubscribeService,
    private cdt: ChangeDetectorRef,
    public dialog: MatDialog
  ) {}

  public ngOnInit() {
    this.postsService
      .getAllPosts()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((posts) => {
        this.originalTable = posts;
        this.table = formatPostTable(posts);
        this.loadingTable = false;
        this.cdt.markForCheck();
      });
  }

  /**
   * Filter posts by title field on the table component using the searchValue from the searchbar component
   * @param searchValue string
   * @returns void
   */
  public filterPosts(searchValue: string): void {
    const tableFiltered =
      this.originalTable?.filter((field) =>
        field.title.toLowerCase().includes(searchValue.toLowerCase())
      ) || [];
    this.table = tableFiltered.length
      ? formatPostTable(tableFiltered)
      : undefined;
    this.cdt.detectChanges();
  }

  /**
   * Open the post details modal and pass the post id to the service to get the post details
   * @param id string
   * @returns void
   */
  openPostDetails(id: string): void {
    this.post$ = this.postsService.getPostById(id).pipe(
      switchMap((post: Post) =>
        combineLatest([
          this.usersService.getUserById(post.userId),
          of(post),
        ]).pipe(
          tap(([user, post]: [User, Post]) => {
            post.user = user;
          }),
          map(([_user, post]) => post),
          takeUntil(this.unsubscribe$)
        )
      ),
      takeUntil(this.unsubscribe$)
    );

    this.dialog.open(ModalComponent, {
      data: {
        template: this.modalPostDetails,
        title: 'Post Details',
      },
      width: '100%',
    });
  }
}
