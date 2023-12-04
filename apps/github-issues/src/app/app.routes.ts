import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IssuesComponent } from './pages/issues/issues.component';

export const appRoutes: Route[] = [
  {
    path: '',
    title: 'Inicio',
    component: HomeComponent,
  },
  {
    path: 'issues/:user/:repo',
    title: 'Issues',
    component: IssuesComponent,
  },
];
