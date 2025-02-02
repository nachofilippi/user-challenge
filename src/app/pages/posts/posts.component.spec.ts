import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { UnsubscribeService } from '../../../services/unsubscribe.service';
import { PostsService } from '../../../services/posts.service';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsComponent, PostDetailsComponent],
      imports: [RouterModule, CommonModule, BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [UnsubscribeService, PostsService],
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
