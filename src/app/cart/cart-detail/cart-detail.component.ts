import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Product } from "src/models/product";

@Component({
  selector: "cart-detail",
  templateUrl: "./cart-detail.component.html",
  styleUrls: ["./cart-detail.component.css"]
})
export class CartDetailComponent {
  @Input() product!: Product;
  @Output() updateAmount = new EventEmitter();
  @Output() removeProduct = new EventEmitter();
  constructor() {}

  updateProductQuantity(quantity: number): void {
    this.updateAmount.emit(
      (quantity - this.product.quantity) * this.product.price
    );
    this.product.quantity = quantity;
  }

  onRemoveProduct(): void {
    if (window.confirm("Are you sure?")) {
      this.updateAmount.emit(-1 * this.product.quantity * this.product.price);
      this.removeProduct.emit(this.product.id);
    }
  }
}
