import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gs-section.component.html',
  styleUrl: './gs-section.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SSectionComponent {
  @HostBinding('class') get classes() {
    return {
      'gs-section': true,
      'gs-section--full': this.isFull,
    };
  }
  @Input() isFull?: boolean;
}
