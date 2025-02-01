import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Table } from './table.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [CommonModule],
})
export class TableComponent {
  @Input() public data?: Table;
}
