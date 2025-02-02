import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() public openModal = new EventEmitter<string>();

  openDialog(id: string): void {
    this.openModal.emit(id);
  }
}
