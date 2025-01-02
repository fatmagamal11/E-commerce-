import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { authGuard } from './authentication/guards/auth.guard';

const routes: Routes = [
  {path:"",redirectTo:"all-product",pathMatch:'full'},
  {path:"all-product",component:AllProductsComponent ,canActivate:[authGuard]},
  {path:"product-detail",component:ProductsDetailsComponent ,canActivate:[authGuard]},
  {path:"cart",component:CartsComponent ,canActivate:[authGuard]},
  {path:"auth/login",component:LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
