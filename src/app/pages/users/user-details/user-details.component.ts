import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class UserDetailsComponent {
  @Input() user?: User;
}
