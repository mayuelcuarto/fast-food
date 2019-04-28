import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  myForm = new FormGroup ({
  	customerName: new FormControl(''),
  	orderNumber: new FormControl(''),
  	order: new FormControl(''),
  	completed: new FormControl(false)
  });

  getOrders(){

  }

  updateOrder(){

  }

  deleteOrder(){

  }

  createOrder(){
  	
  }
}
