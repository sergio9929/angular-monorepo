import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gs-container.component.html',
  styleUrl: './gs-container.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SContainerComponent {
  @HostBinding('class') get classes() {
    return {
      'gs-container': true,
    };
  }
}
