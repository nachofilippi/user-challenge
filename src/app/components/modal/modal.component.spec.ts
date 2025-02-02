import { TestBed } from '@angular/core/testing';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalComponent],
    }).compileComponents();
  });

  it('should create the searchbar', () => {
    const fixture = TestBed.createComponent(ModalComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
