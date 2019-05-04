

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductStockManagementComponent } from './product-stock-management/product-stock-management.component';

const routes: Routes = [{
  path: 'viewstock',
  component: ProductStockManagementComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
