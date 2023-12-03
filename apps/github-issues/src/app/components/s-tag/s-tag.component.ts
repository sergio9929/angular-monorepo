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
  templateUrl: './s-tag.component.html',
  styleUrl: './s-tag.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class STagComponent {
  @Input() bordered?: boolean;
  @HostBinding('class') get classes() {
    return {
      's-tag': true,
      's-tag--bordered': this.bordered,
    };
  }
}
