import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component'; // Import Toastr module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { ModalComponent } from './components/modal/modal.component';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    SelectComponent,
    CardComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgbRatingModule,
    ReactiveFormsModule,
    NgxSpinnerModule  ],
  exports: [
    ReactiveFormsModule,
    NgbRatingModule,
    ModalComponent,
    FormsModule,
    SelectComponent,
    HeaderComponent,
    SpinnerComponent,
    CardComponent,
  ]

})
export class SharedModule { }
