import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { STableComponent } from './components/s-table/s-table.component';
import { SContainerComponent, SSectionComponent } from '@angular-monorepo/shared-ui';

@Component({
  standalone: true,
  imports: [SContainerComponent, SSectionComponent, STableComponent, RouterModule],
  selector: 's-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'github-issues';
}
