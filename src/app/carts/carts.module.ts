import { NgModule } from '@angular/core';
import { CartsComponent } from './components/carts/carts.component';
import { NgxLoadingModule } from 'ngx-loading';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
CommonModule,FormsModule,NgxSpinnerModule
]
})
export class CartsModule { }
