import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from './../order-management/order-view/order.model';
import { AppSetting } from './../config/appSetting';

@Injectable({
  providedIn: 'root'
})
export class OrderManagementService {

  constructor(private httpClient: HttpClient) { }
  serviceUrl = AppSetting.serviceUrl;
  orderView(): Observable<any> {
    const orderUrl = 'orders';
    const url: string = this.serviceUrl + orderUrl;
    return this.httpClient.get<Order>(url);
  }
  updateStatus(id, status): Observable<any> {
    const orderUrl = 'orders/';
    const url: string = this.serviceUrl + orderUrl + id;
    return this.httpClient.put<Order>(url, status);
  }
}
