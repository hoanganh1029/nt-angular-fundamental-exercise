import { Component, Input, OnInit } from '@angular/core';
import { Card } from 'src/models/card';

@Component({
  selector: 'card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  
  constructor() { }

  ngOnInit(): void {
  }

}
