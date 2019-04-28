import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormComponent,
    OrdersComponent,
    OrdersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
