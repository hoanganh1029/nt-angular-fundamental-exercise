import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Product } from "src/models/product";

@Component({
  selector: "cart-list",
  templateUrl: "./cart-list.component.html",
  styleUrls: ["./cart-list.component.css"]
})
export class CartListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: "Headphone Sony MDR-ZX310AP",
      price: 40.25,
      color: "White",
      image:
        "https://salt.tikicdn.com/cache/200x200/ts/product/da/6d/16/560e5ff1cf29eb161889b41667fccf24.jpg",
      quantity: 1
    },
    {
      id: 2,
      name: "Keyboard Gaming DAREU EK1280S ",
      price: 30.12,
      color: "Black",
      image:
        "https://salt.tikicdn.com/cache/280x280/ts/product/5e/25/cb/4c189838dcd64299b829bbca0d393445.png",
      quantity: 1
    }
  ];
  price: number;
  @Output() updateTotalPrice = new EventEmitter();
  constructor() {
    this.price = this.getTotalPrice();
  }

  ngOnInit(): void {
    this.updateTotalPrice.emit(this.price);
    console.log("Price init: " + this.price);
  }

  onUpdateTotalPrice(amount: number): void {
    this.price = Math.floor((this.price + amount) * 100) / 100;
    this.updateTotalPrice.emit(this.price);
    console.log("Price: " + this.price);
  }
  removeProduct(id: any): void {
    this.products = this.products.filter(x => x.id !== id);
  }

  getTotalPrice(): number {
    const totalPrice = this.products.reduce(
      (total, cur) => (total += cur.price * cur.quantity),
      0
    );
    return Math.floor(totalPrice * 100) / 100;
  }
}
