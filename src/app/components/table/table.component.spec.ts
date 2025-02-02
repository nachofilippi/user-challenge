import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableComponent } from './table.component';
import { CommonModule } from '@angular/common';
import { Table, TableTypes } from './table.model';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display table headers', () => {
    const tableData: Table = {
      headers: ['id', 'name', 'email'],
      body: [
        [
          { value: '1', type: 'users' },
          { value: 'John Doe', type: 'users' },
          { value: 'john.doe@example.com', type: 'users' },
        ],
      ],
      type: TableTypes.users,
    };
    component.data = tableData;
    fixture.detectChanges();

    const headers = fixture.nativeElement.querySelectorAll('th');
    expect(headers.length).toBe(3);
    expect(headers[0].textContent).toContain('id');
    expect(headers[1].textContent).toContain('name');
    expect(headers[2].textContent).toContain('email');
  });

  it('should display table body', () => {
    const tableData: Table = {
      headers: ['id', 'name', 'email'],
      body: [
        [
          { value: '1', type: 'users' },
          { value: 'John Doe', type: 'users' },
          { value: 'john.doe@example.com', type: 'users' },
        ],
      ],
      type: TableTypes.users,
    };
    component.data = tableData;
    fixture.detectChanges();

    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(1);

    const cells = rows[0].querySelectorAll('td');
    expect(cells.length).toBe(3);
    expect(cells[0].textContent).toContain('1');
    expect(cells[1].textContent).toContain('John Doe');
    expect(cells[2].textContent).toContain('john.doe@example.com');
  });

  it('should emit openModal event on row click', () => {
    spyOn(component.openModal, 'emit');

    const tableData: Table = {
      headers: ['id', 'name', 'email'],
      body: [
        [
          { value: '1', type: 'users' },
          { value: 'John Doe', type: 'users' },
          { value: 'john.doe@example.com', type: 'users' },
        ],
      ],
      type: TableTypes.users,
    };
    component.data = tableData;
    fixture.detectChanges();

    const row = fixture.nativeElement.querySelector('tbody tr');
    row.click();

    expect(component.openModal.emit).toHaveBeenCalledWith('1');
  });

  it('should display empty table message when no data', () => {
    component.data = undefined;
    fixture.detectChanges();

    const emptyMessage = fixture.nativeElement.querySelector('.empty-image');
    expect(emptyMessage).toBeTruthy();
  });
});
