import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ProductsService } from '../../shared/products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  displayedColumns: string[] = ['name', 'price'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  	this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.dataSource.data = res;
    });
  }
}
