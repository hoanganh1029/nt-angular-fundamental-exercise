import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  @Input() isShowProfile: boolean = false;
  @Output() onToogleProfile = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  toggleProfile(): void {
    this.onToogleProfile.emit();
  }
}
