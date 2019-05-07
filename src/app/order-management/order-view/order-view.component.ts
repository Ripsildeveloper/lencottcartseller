import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderManagementService } from './../order-management.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Order } from './../order-view/order.model';
import { MatPaginator, MatTableDataSource , MatSort} from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { SingleOrderService } from './../single-order/single-order.service';

@Component({
  selector: 'app-order-view',
  templateUrl: './order-view.component.html',
  styleUrls: ['./order-view.component.css']
})
export class OrderViewComponent implements OnInit {
  order: any = [];
  orderDetails: Order[];
  orderForm: FormGroup;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private orderManagementService: OrderManagementService,
    private fb: FormBuilder, private snackBar: MatSnackBar, private singleOrderService: SingleOrderService) { }
  status = ['New', 'Processing', 'OnHold', 'Completed', 'Cancelled', 'Failed'];
  displayedColumns: string[] = ['order', 'date', 'status', 'total', 'view'];

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderManagementService.orderView().subscribe(data => {
    this.order = data;
    this.orderDetails = data;
    this.order = new MatTableDataSource<Order>(data);
    this.order.paginator = this.paginator;
    }, error => {
      console.log(error);
    });
  }
  applyFilter(filterValue: string) {
    this.order.filter = filterValue.trim().toLowerCase();
  }
  viewSingleOrder(element) {
    this.singleOrderService.openAddress(element);
  }

  orderStatusUpdate(e, id)  {
    this.order = new Order();
    this.order.orderStatus = e.value;
    this.orderManagementService.updateStatus(id, this.order).subscribe(data => {
    this.order = data;
    this.orderDetails = data;
    this.order = new MatTableDataSource<Order>(data);
      this.snackBar.open('Order Updated', 'Order Updated', {
        duration: 3000,
      });
     /*  this.router.navigate(['orders/vieworders']); */
     console.log(this.order);
    }, err => {
      console.log(err);
    });
  }
  viewNewOrders() {
    this.order =  this.orderDetails.filter(ord => ord.orderStatus === 'New');
  }
  viewActiveOrders() {
    this.order =  this.orderDetails.filter(ord => ord.orderStatus === 'Processing');
  }
  viewCompletedOrders() {
    this.order =  this.orderDetails.filter(ord => ord.orderStatus === 'Completed');
  }
  viewCancelledOrders() {
    this.order =  this.orderDetails.filter(ord => ord.orderStatus === 'Cancelled');
  }
}
