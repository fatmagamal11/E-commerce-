import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductsDetailsComponent } from './products/components/products-details/products-details.component';
import { CartsComponent } from './carts/components/carts/carts.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { authGuard } from './authentication/guards/auth.guard';
import { AuthComponent } from './layouts/auth/auth.component';
import { UserComponent } from './layouts/user/user.component';

const routes: Routes = [
  {
    path: '', // Default route
    redirectTo: '/auth',
    pathMatch: 'full', // Ensure you include `pathMatch` when using `redirectTo`
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '',  redirectTo: '/auth/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
 {
  path:"user",
  component:UserComponent,
  children:[
    {
      path:"",redirectTo:"/all-product",pathMatch:'full'
    },
    {
      path:"all-product",component:AllProductsComponent
    },
    {path:"all-product",component:AllProductsComponent ,canActivate:[authGuard]},
  {path:"product-details/:id",component:ProductsDetailsComponent ,canActivate:[authGuard]},
  {path:"cart",component:CartsComponent ,canActivate:[authGuard]},
  ]
 }
  // {path:"",redirectTo:"/auth/login",pathMatch:'full'},
  // {path:"all-product",component:AllProductsComponent ,canActivate:[authGuard]},
  // {path:"product-details/:id",component:ProductsDetailsComponent ,canActivate:[authGuard]},
  // {path:"cart",component:CartsComponent ,canActivate:[authGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
