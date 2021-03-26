import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "quantity-input",
  templateUrl: "./quantity-input.component.html",
  styleUrls: ["./quantity-input.component.css"]
})
export class QuantityInputComponent {
  @Input() quantity: number = 0;
  @Output() changeQuantity = new EventEmitter();
  increase(): void {
    this.quantity += 1;
    this.handleChangeQuantity();
  }
  decrease(): void {
    this.quantity = this.quantity > 0 ? this.quantity - 1 : 0;
    this.handleChangeQuantity();
  }

  handleChangeQuantity(): void {
    this.changeQuantity.emit(this.quantity);
  }
}
