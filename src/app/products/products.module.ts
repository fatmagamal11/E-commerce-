import { NgModule } from '@angular/core';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';
import { CartsAdminComponent } from '../carts/components/carts-admin/carts-admin.component';



@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ProductsAdminComponent,
    CartsAdminComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule
]
})
export class ProductsModule { }
