import { Component, HostBinding, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s-container.component.html',
  styleUrl: './s-container.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SContainerComponent {
  @HostBinding('class') classes = {
    's-container': true,
  };
}
