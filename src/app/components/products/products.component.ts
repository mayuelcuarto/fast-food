import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatSort, MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ProductsService } from '../../shared/products.service';
import { ProductInterface } from '../../models/product';
import { ProductModalComponent } from '../../modals/product-modal/product-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent implements OnInit {

  constructor(private productService: ProductsService, public dialog: MatDialog) { }
  displayedColumns: string[] = ['name', 'price', 'actions'];
  dataSource = new MatTableDataSource();

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '250px',
      data: {selectedProduct: this.productService.selectedProduct}
    });

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
  	this.getAllProducts();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

  getAllProducts(){
    this.productService.getProducts().subscribe(res => {
      this.dataSource.data = res;
    });
  }

  onChangeStatus(product: ProductInterface){
    this.productService.updateProduct(product);
  }

  onPreUpdateProduct(product: ProductInterface){
    this.productService.selectedProduct = Object.assign({}, product);
    this.openDialog();
  }

  onDeleteProduct(idProduct: string){
    const confirmacion = confirm('Are you sure?');
    if(confirmacion){
      this.productService.deleteProduct(idProduct);
    }
  }
}
