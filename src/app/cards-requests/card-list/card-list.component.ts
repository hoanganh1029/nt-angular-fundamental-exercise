import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card';
import { CardService } from 'src/services/card.service';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];
  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(): void {
    this.cardService.getAll().subscribe(cards => { this.cards = cards; })
  }
}
