import {
  Component,
  HostBinding,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 's-tag',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TagComponent {
  @Input() bordered?: boolean;
  @HostBinding('class') get classes() {
    return {
      's-tag': true,
      's-tag--bordered': this.bordered,
    };
  }
}
