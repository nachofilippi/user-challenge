import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { headerLinks } from './header.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  imports: [CommonModule, RouterModule],
  styles: [
    `
      .navbar {
        z-index: 10;
      }
    `,
  ],
})
export class HeaderComponent {
  public readonly headerLinks = headerLinks;
}
