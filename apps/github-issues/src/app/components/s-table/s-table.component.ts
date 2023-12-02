import { Component, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 's-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './s-table.component.html',
  styleUrl: './s-table.component.css',
})
@Injectable({providedIn: 'root'})
export class STableComponent {
  constructor(private http: HttpClient) {
    // This service can now make HTTP requests via `this.http`.

    // no se puedes usar los parametros con HttpParams porque los codifica
    // y la api de github no los lee bien
    this.http.get('https://api.github.com/search/issues?q=repo:pocketbase/pocketbase+is:issue').subscribe((data) => {
      this.issues = data;
      // console.log(data);
    })
  }
  
  issues?: any;
  title = 'issues';
  rows = ['uno', 'dos'];
}
