import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 's-paginator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  constructor(public issues: IssuesService) {}

  firstPage() {
    this.issues.firstPage()
  }

  nextPage() {
    this.issues.nextPage()
  }

  previousPage() {
    this.issues.previousPage()
  }
}
