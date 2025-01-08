import { NgModule } from '@angular/core';
import { CartsComponent } from './components/carts/carts.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  NgxSpinnerModule } from 'ngx-spinner';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
CommonModule,FormsModule,NgxSpinnerModule,NgbRatingModule
]
})
export class CartsModule { }
