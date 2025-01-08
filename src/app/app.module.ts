import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './authentication/components/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { ProductsModule } from './products/products.module';
import { CommonModule, DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxSpinnerModule } from 'ngx-spinner';
import { AuthComponent } from './layouts/auth/auth.component';
import { AdminComponent } from './layouts/admin/admin.component';
import { UserComponent } from './layouts/user/user.component';
import { CartsModule } from './carts/carts.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    CartsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ProductsModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    DatePipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
