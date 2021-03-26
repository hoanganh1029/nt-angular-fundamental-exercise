import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "cart-container",
  templateUrl: "./cart-container.component.html",
  styleUrls: ["./cart-container.component.css"]
})
export class CartContainerComponent {
  totalPrice: number = 0;
  constructor() { }

  onUpdateTotalPrice(totalPrice: number): void {
    this.totalPrice = totalPrice;
  }
}
