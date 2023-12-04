import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ContainerComponent,
  SectionComponent,
} from '@angular-monorepo/shared-ui';
import { TableComponent } from '../../components/table/table.component';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { TagComponent } from '../../components/tag/tag.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { IssuesService } from '../../services/issues.service';

@Component({
  selector: 's-issues',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SectionComponent,
    TableComponent,
    CardComponent,
    TagComponent,
    PaginatorComponent,
    RouterLink,
  ],
  templateUrl: './issues.component.html',
  styleUrl: './issues.component.css',
})
export class IssuesComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    public issues: IssuesService
  ) {
    route.params.subscribe((param) => {
      issues.user = param['user'];
      issues.repo = param['repo'];
      issues.loadData();
    });
  }
}
