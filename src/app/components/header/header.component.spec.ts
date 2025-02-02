import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

describe('HeaderComponent', () => {
  let fixture: ComponentFixture<HeaderComponent>;
  let component: HeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              data: {
                headerLinks: [
                  { link: '/users', name: 'Users' },
                  { link: '/posts', name: 'Posts' },
                ],
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the header', () => {
    expect(component).toBeTruthy();
  });

  it('should render header links', () => {
    const links = fixture.debugElement.queryAll(By.css('.nav-link'));
    expect(links.length).toBe(2);
    expect(links[0].nativeElement.textContent).toContain('Users');
    expect(links[1].nativeElement.textContent).toContain('Posts');
  });
});
