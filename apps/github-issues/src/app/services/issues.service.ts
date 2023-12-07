import { HttpClient } from '@angular/common/http';
import { Injectable, signal, effect } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IssuesService {
  constructor(private route: ActivatedRoute, private http: HttpClient) {
    // effect(() => {
    //   console.log(this.data());
    // });
  }

  user = 'pocketbase';
  repo = 'pocketbase';
  page = 1;

  loading = true;
  errors: any = null;
  data: any = null;

  loadData() {
    this.loading = true;
    this.http
      .get(
        `https://api.github.com/search/issues?page=${this.page}&per_page=25&q=repo:${this.user}/${this.repo}+is:issue`
      )
      .subscribe(
        (data: any) => {
          this.data = data;
          this.loading = false;
          this.errors = null;
        },
        (error: any) => {
          this.errors = error.error.errors
            ? error.error.errors?.map((error: any) => error.message).join(' ')
            : error.error.message;
          this.loading = false;
          console.error(error);
        }
      );
  }

  firstPage() {
    if (this.page !== 1) {
      this.page = 1;
      this.loadData();
    }
  }

  nextPage() {
    this.page++;
    this.loadData();
  }

  previousPage() {
    const newPage = Math.max(this.page - 1, 1);

    if (this.page !== newPage) {
      this.page = newPage;
      this.loadData();
    }
  }
}
