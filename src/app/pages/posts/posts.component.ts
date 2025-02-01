import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { takeUntil } from 'rxjs';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { formatPostTable } from '../../components/table/table.helper';
import { Table } from '../../components/table/table.model';
import { PostsService } from '../../../services/posts.service';
import { CommonModule } from '@angular/common';
import { TableModule } from '../../components/table/table.module';
import { Post } from '../../../models/post.model';
import { SearchBarComponent } from '../../components/searchbar/searchbar.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  imports: [TableModule, CommonModule, SearchBarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent {
  public loadingTable = true;
  public table?: Table;
  public originalTable?: Post[];

  constructor(
    private postsService: PostsService,
    private readonly unsubscribe$: UnsubscribeService,
    private cdt: ChangeDetectorRef
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
}
