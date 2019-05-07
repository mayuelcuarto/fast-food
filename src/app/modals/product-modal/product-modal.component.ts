import { Component, OnInit, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ProductInterface } from '../../models/product';
import { ProductsService } from '../../shared/products.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-modal',
  templateUrl: './product-modal.component.html',
  styleUrls: ['./product-modal.component.css']
})
export class ProductModalComponent implements OnInit {
  constructor(    
    public dialogRef: MatDialogRef<ProductModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public productService: ProductsService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveProduct(productForm: NgForm): void{
    if(this.data.selectedProduct.id == null){
      // New
      console.log('New', productForm.value);
      if(this.data.selectedProduct.name != null && this.data.selectedProduct.price != null){
        this.productService.createProduct(productForm.value);
      }
    }else{
      // Edit
      console.log('Update', productForm.value);
      if(this.data.selectedProduct.name != null && this.data.selectedProduct.price != null){
        this.productService.updateProduct(productForm.value);
      }
    }
    //console.log('Else', productForm.value);
    productForm.resetForm();
    this.dialogRef.close();
  }

}
