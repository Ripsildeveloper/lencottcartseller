import { Component, OnInit, ViewChild } from '@angular/core';
import { InventoryManagementService } from './../inventory-management.service';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material';
import { Product } from './product.model';

@Component({
  selector: 'app-product-stock-management',
  templateUrl: './product-stock-management.component.html',
  styleUrls: ['./product-stock-management.component.css']
})
export class ProductStockManagementComponent implements OnInit {
  productModel: any;
  productData: Product;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: string[] = ['primeImage', 'productName', 'styleCode', 'skuCode', 'view', 'delete'];
  constructor(private inventoryManagementService: InventoryManagementService) { }

  ngOnInit() {
    this.getAllProducts();
  }
  getAllProducts() {
    this.inventoryManagementService.getProducts().subscribe(data => {
      this.productModel = new MatTableDataSource<Product>(data);
      this.productModel.sort = this.sort;
      this.productModel.paginator = this.paginator;
      this.productData = this.productModel;
    }, err => {
      console.log(err);
    });
  }
}
