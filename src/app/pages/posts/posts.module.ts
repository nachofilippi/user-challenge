import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { PostDetailsModule } from './post-details/post-details.module';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../../components/modal/modal.component';
import { SearchBarComponent } from '../../components/searchbar/searchbar.component';
import { TableModule } from '../../components/table/table.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    TableModule,
    CommonModule,
    MatDialogModule,
    SearchBarComponent,
    PostDetailsModule,
    ModalComponent,
    RouterModule.forChild([
      {
        path: '',
        component: PostsComponent,
      },
    ]),
  ],
  providers: [PostsService, UnsubscribeService],
})
export class PostsModule {}
