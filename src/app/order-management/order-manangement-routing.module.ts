
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderViewComponent } from './order-view/order-view.component';


const routes: Routes = [{
  path: 'orderview',
  component: OrderViewComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderManangementRoutingModule { }
