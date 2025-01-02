import { IProduct } from './../../../interfaces/Iproduct.intrface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,

  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  countDisplay=false
  @Input() cardObject: IProduct = {} as IProduct
  @Output() onCardClick: EventEmitter< {item:IProduct,quantity:string}>

  constructor(){
    this.onCardClick= new EventEmitter< {item:IProduct,quantity:string}>()
  }

  addToCart(clickedCardObject: IProduct,countOfProduct:string='0') {
    this.countDisplay=false
    this.onCardClick.emit({item:clickedCardObject,quantity:countOfProduct})
  }
}
