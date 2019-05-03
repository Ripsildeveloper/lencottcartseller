import { Injectable } from '@angular/core';
import { Order } from './../order-view/order.model';
import { MatDialog, MatDialogRef } from '@angular/material';
import { Observable } from 'rxjs';
import { SingleOrderComponent } from './../single-order/single-order.component';


@Injectable({
  providedIn: 'root'
})
export class SingleOrderService {
  dialogRef: MatDialogRef<SingleOrderComponent>;
  constructor(private dialog: MatDialog) { }

  openAddress(order?: Order): Observable<boolean> {
    this.dialogRef = this.dialog.open(SingleOrderComponent,
      {
        disableClose: true, backdropClass: 'light-backdrop',
        width: '720px',
        data: [order],
      });
    return this.dialogRef.afterClosed();
  }
  closeAddress() {
    if (this.dialogRef) {
      this.dialogRef.close();
    }
  }
}
