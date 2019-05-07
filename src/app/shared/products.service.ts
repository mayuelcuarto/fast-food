import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductInterface } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private readonly afs: AngularFirestore) {}
  private productsCollection: AngularFirestoreCollection<ProductInterface>;
  private products: Observable<ProductInterface[]>;
  private productDoc: AngularFirestoreDocument<ProductInterface>;
  private product: Observable<ProductInterface>;
  public selectedProduct: ProductInterface = {
    id: null
  };

  getProducts(){
    this.productsCollection = this.afs.collection<ProductInterface>('products');
    return this.products = this.productsCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as ProductInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  updateProduct(product: ProductInterface){
  	return this.productsCollection.doc(product.id).update(product);
  }

  deleteProduct(id: string){
  	return this.productsCollection.doc(id).delete();
  }

  createProduct(product: ProductInterface){
  	return this.productsCollection.add(product);
  }
}
