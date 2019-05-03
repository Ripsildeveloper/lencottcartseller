import { Component, OnInit, Inject, Optional, Input  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Order } from './../order-view/order.model';
import { AppSetting } from '../../config/appSetting';

@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  productImageUrl: string = AppSetting.productImageUrl;
  constructor( @Optional() @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<SingleOrderComponent>) { }

  ngOnInit() {
  }

}
