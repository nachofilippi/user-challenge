import { Component, Inject, TemplateRef } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { imports } from './modal.imports';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  standalone: true,
  imports,
  animations: [
    trigger('transitionMessages', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms', style({ opacity: 0 }))]),
    ]),
  ],
  styles: [
    `
      ::ng-deep .cdk-global-overlay-wrapper {
        justify-content: center !important;
      }
    `,
  ],
})
export class ModalComponent {
  constructor(
    @Inject(MatDialogRef) public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      template: TemplateRef<HTMLElement>;
      title: string;
    }
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
