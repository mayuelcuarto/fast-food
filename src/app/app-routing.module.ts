import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { EmployesComponent } from './components/employes/employes.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'employes', component: EmployesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
