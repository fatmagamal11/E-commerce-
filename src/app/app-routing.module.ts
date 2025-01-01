import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';

const routes: Routes = [
  {path:"",redirectTo:"all-product",pathMatch:'full'},
  {path:"all-product",component:AllProductsComponent},
  {path:"product-detail",component:ProductsDetailsComponent},
  {path:"cart",component:CartsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
