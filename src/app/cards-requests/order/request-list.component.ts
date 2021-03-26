import { Component, OnInit } from '@angular/core';
import { Order } from 'src/models/order';
import {OrderService} from '../../../services/order.service'
@Component({
  selector: 'request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.scss']
})
export class RequestListComponent implements OnInit {
  orders: Order[] = [];
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() :void{
    this.orderService.getAll().subscribe(r => {this.orders = r.filter(x => x.id < 20); console.log(r);});
  }

  deleteOrder(id: number): void{    
    this.orderService.delete(id).subscribe(x => {
      console.log("Delete successfully " + id);
      this.orders = this.orders.filter(x => x.id !== id);
    });
  }
}
