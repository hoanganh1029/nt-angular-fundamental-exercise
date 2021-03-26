import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/models/order';
import { OrderService } from 'src/services/order.service';
import { Location } from '@angular/common';

@Component({
  selector: 'order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {
  order!: Order;
  orderDetailForm!: FormGroup;

  constructor(private orderService: OrderService,
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }


  ngOnInit(): void {
    this.orderDetailForm = this.fb.group({
      subject: ['', [Validators.required]],
      statusName: ['', [Validators.required]],
      requestDate: [null, [Validators.required]],
      latestUpdate: [null],
      phoneNumberPrefix: ['+94'],
      phone: [''],
      attendant: [''],
    });
    this.getOrder();
  }

  submitForm(): void {
    for (const i in this.orderDetailForm.controls) {
      this.orderDetailForm.controls[i].markAsDirty();
      this.orderDetailForm.controls[i].updateValueAndValidity();
    }
    if (this.orderDetailForm.invalid) {
      return;
    }
    const updatedOrder = this.orderDetailForm.value as Order;
    updatedOrder.id = parseInt(this.activatedRoute.snapshot?.paramMap.get('id') ?? '0');
    this.orderService.update(updatedOrder).subscribe(r => {
      console.log(r);
      this.goBack()
    });
  }

  goBack(): void {
    this.location.back();
  }

  getOrder(): void {
    const orderId = parseInt(this.activatedRoute.snapshot?.paramMap.get('id') ?? '0');
    this.orderService.getById(orderId).subscribe(order => {
      this.order = order;
      this.orderDetailForm.patchValue({
        subject: order.subject,
        statusName: order.statusName,
        requestDate: order.requestDate,
        latestUpdate: order.latestUpdate,
        phoneNumberPrefix: ['+94'],
        phone: order.phone,
        attendant: order.attendant,
      })
    });
  }

}
