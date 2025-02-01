import { TestBed } from '@angular/core/testing';
import { SearchBarComponent } from './searchbar.component';

describe('SearchBarComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBarComponent],
    }).compileComponents();
  });

  it('should create the searchbar', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should emit search value', () => {
    const fixture = TestBed.createComponent(SearchBarComponent);
    const app = fixture.componentInstance;
    const searchValue = 'search value';
    app.searchChange({ target: { value: searchValue } } as unknown as Event);
    app.search.subscribe((value) => {
      expect(value).toBe(searchValue);
    });
  });
});
