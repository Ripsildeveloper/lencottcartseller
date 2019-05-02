import { Component, OnInit, Input } from '@angular/core';
import { Order } from './../order-view/order.model';
import { AppSetting } from '../../config/appSetting';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  @Input() order: Order;
  productImageUrl: string = AppSetting.productImageUrl;
  constructor() { }

  ngOnInit() {
  }

}
