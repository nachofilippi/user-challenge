import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';
import { PostsService } from '../../../services/posts.service';
import { UnsubscribeService } from '../../../services/unsubscribe.service';

@NgModule({
  imports: [
    CommonModule,
    PostsComponent,
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
