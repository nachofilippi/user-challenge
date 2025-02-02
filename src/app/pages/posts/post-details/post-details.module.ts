import { NgModule } from '@angular/core';
import { PostDetailsComponent } from './post-details.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [CommonModule],
  exports: [PostDetailsComponent],
})
export class PostDetailsModule {}
