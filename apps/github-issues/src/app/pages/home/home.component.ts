import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ContainerComponent,
  SectionComponent,
} from '@angular-monorepo/shared-ui';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 's-home',
  standalone: true,
  imports: [
    CommonModule,
    ContainerComponent,
    SectionComponent,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}

  currentTab = 'repoUrlForm';

  userRepoForm = new FormGroup({
    user: new FormControl('pocketbase', Validators.required),
    repo: new FormControl('pocketbase', Validators.required),
  });

  repoUrlForm = new FormGroup({
    url: new FormControl(
      'https://github.com/pocketbase/pocketbase/issues',
      Validators.required
    ),
  });

  handleRepoUrlSubmit() {
    const info = this.getGitHubUserAndRepo(this.repoUrlForm.value.url);
    this.router.navigate(['/issues', info?.user, info?.repo]);
  }

  handleUserRepoSubmit() {
    this.router.navigate([
      '/issues',
      this.userRepoForm.value.user,
      this.userRepoForm.value.repo,
    ]);
    this.router.navigate([
      '/issues',
      this.userRepoForm.value.user,
      this.userRepoForm.value.repo,
    ]);
  }

  getGitHubUserAndRepo(url: any) {
    const regex = /github.com\/([^/]+)\/([^/]+)/;
    const match = url.match(regex);
    if (match) {
      return {
        user: match[1],
        repo: match[2],
      };
    }
    return null;
  }

  getGitHubIssuesUrl(user: string, repo: string) {
    return `https://github.com/${user}/${repo}/`;
  }
}
