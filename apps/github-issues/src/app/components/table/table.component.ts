import { Component, Injectable, Input } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { DateComponent } from '../date/date.component';
import { TagComponent } from '../tag/tag.component';

@Component({
  selector: 's-table',
  standalone: true,
  imports: [CommonModule, DateComponent, TagComponent, NgOptimizedImage],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
@Injectable({ providedIn: 'root' })
export class TableComponent {
  @Input() issues: any;
}
