import { Component, Input } from "@angular/core";

@Component({
  selector: "cart-order-summary",
  templateUrl: "./cart-order-summary.component.html",
  styleUrls: ["./cart-order-summary.component.css"]
})
export class CartOrderSummaryComponent {
  @Input() totalPrice: number = 0;
  currentDate: Date = new Date();
  discount: number = 0;
  constructor() {}

  ngOnChanges() {
    const totalDiscount = this.totalPrice >= 150 ? 0.1 * this.totalPrice : 0;
    this.discount = Math.floor(totalDiscount * 100) / 100;
  }

  getTotal(): number {
    const total = Math.floor((this.totalPrice - this.discount) * 100) / 100;
    return total > 0 ? total : 0;
  }
}
