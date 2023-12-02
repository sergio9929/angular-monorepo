import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'gs-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s-section.component.html',
  styleUrl: './s-section.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SSectionComponent {
  @HostBinding('class') classes = {
    's-section': true,
    's-section--full': this.isFull,
  }; 
  @Input() isFull?: boolean;
}
