import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SDateComponent } from '../s-date/s-date.component';
import { STagComponent } from '../s-tag/s-tag.component';

@Component({
  selector: 's-table',
  standalone: true,
  imports: [CommonModule, SDateComponent, STagComponent],
  templateUrl: './s-table.component.html',
  styleUrl: './s-table.component.css',
})
@Injectable({ providedIn: 'root' })
export class STableComponent {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.

    // no se puedes usar los parametros con HttpParams porque los codifica
    // y la api de github no los lee bien
    this.http
      .get(
        'https://api.github.com/search/issues?page=1&per_page=25&q=repo:pocketbase/pocketbase+is:issue'
      )
      .subscribe((data: any) => {
        this.issues = data;
        // console.log(data);
      });
  }

  issues?: any;
  title = 'issues';
  rows = ['uno', 'dos'];
}
