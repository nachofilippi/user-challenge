import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Size } from './searchbar.config';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  imports: [CommonModule, RouterModule],
})
export class SearchBarComponent {
  @Input() public searchValue = '';
  @Input() public placeholder = 'Search...';
  @Input() public disabled = false;
  @Input() public size: Size = Size.SM;

  @Output() public search = new EventEmitter<string>();

  public searchChange(searchValue: Event): void {
    const input = searchValue.target as HTMLInputElement;
    this.searchValue = input.value;
    this.search.emit(input.value);
  }
}
