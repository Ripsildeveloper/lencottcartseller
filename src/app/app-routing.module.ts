import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavSidebarComponent } from './shared/nav-sidebar/nav-sidebar.component';


const routes: Routes = [
  {
    path: '',
    component: NavSidebarComponent,
    children: [{
      path: 'account',
      loadChildren: './account/account.module#AccountModule'
    },
    {
      path: 'category',
      loadChildren: './category/category.module#CategoryModule'
    },
    {
      path: 'product',
      loadChildren: './product/product.module#ProductModule'
    },
    {
      path: 'moq',
      loadChildren: './moq/moq.module#MoqModule'
    },
    {
      path: 'settings',
      loadChildren: './settings/settings.module#SettingsModule'
    },
    {
      path: 'customers',
      loadChildren: './customer-management/customer-management.module#CustomerManagementModule'
    },    {
      path: 'order',
      loadChildren: './order-management/order-management.module#OrderManagementModule'
    },
    {
      path: 'order',
      loadChildren: './order-management/order-management.module#OrderManagementModule'
    },
    {
      path: 'inventory',
      loadChildren: './inventory-management/inventory-management.module#InventoryManagementModule'
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

