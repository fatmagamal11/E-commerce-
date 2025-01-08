import { Router } from '@angular/router';
import { IProduct } from '../../../Models/Iproduct.intrface';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
 
})
export class CardComponent {
  countDisplay = false
  @Input() cardObject: IProduct = {} as IProduct
  @Output() onCardClick: EventEmitter<{ item: IProduct, quantity: string }>

  constructor(private _Router: Router) {
    this.onCardClick = new EventEmitter<{ item: IProduct, quantity: string }>()
  }

 
  ariaValueText(current: number, max: number): string {
    return `${current.toFixed(2)} out of ${max} hearts`;
  }
  addToCart(clickedCardObject: IProduct, countOfProduct: string = '0') {
    if (countOfProduct == ''|| countOfProduct=="0") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You Must Enter Quantity",
      });
    } else {
      this.countDisplay = false
      this.onCardClick.emit({ item: clickedCardObject, quantity: countOfProduct })
    }
  }

  showDetails(id: number) {
    this._Router.navigateByUrl(`/user/product-details/${id}`)
  }
}
