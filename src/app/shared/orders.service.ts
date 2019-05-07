import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OrderInterface } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly afs: AngularFirestore) {}
	private ordersCollection: AngularFirestoreCollection<OrderInterface>;
  private orders: Observable<OrderInterface[]>;
  private orderDoc: AngularFirestoreDocument<OrderInterface>;
  private order: Observable<OrderInterface>;
  public selectedOrder: OrderInterface = {
    id: null
  };

  myForm = new FormGroup ({
  	customerName: new FormControl(''),
  	orderNumber: new FormControl(''),
  	order: new FormControl(''),
  	completed: new FormControl(false)
  });

  getOrders(){
  	this.ordersCollection = this.afs.collection<OrderInterface>('orders');
    return this.orders = this.ordersCollection.snapshotChanges()
    .pipe(map(changes => {
      return changes.map(action => {
        const data = action.payload.doc.data() as OrderInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }

  updateOrder(order: OrderInterface){
  	return this.ordersCollection.doc(order.id).update(order);
  }

  deleteOrder(id: string){
  	return this.ordersCollection.doc(id).delete();
  }

  createOrder(order: OrderInterface){
  	return this.ordersCollection.add(order);
  }
}
