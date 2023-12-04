import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 's-date',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date.component.html',
  styleUrl: './date.component.css',
})
export class DateComponent {
  @Input() date: Date | string | number = Date.now();
}
