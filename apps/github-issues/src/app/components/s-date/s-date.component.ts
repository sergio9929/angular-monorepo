import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 's-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s-date.component.html',
  styleUrl: './s-date.component.css',
})
export class SDateComponent {
  @Input() date: Date | string | number = Date.now();
}
