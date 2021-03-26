import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Card } from 'src/models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  getAll(): Observable<Card[]> {
    return this.http.get<Card[]>("http://localhost:4010/cards");
  }

}
