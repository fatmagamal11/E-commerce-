import { NgModule } from '@angular/core';
import { CartsComponent } from './components/carts/carts.component';
import { SharedModule } from '../shared/shared.module';
// import { SharedModule_1 as SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    SharedModule
]
})
export class CartsModule { }
