import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../../interfaces/Iproduct.intrface';
import { Router } from '@angular/router';
import { ICartOrderBody } from '../../../interfaces/cartBody';
import { DatePipe } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-carts',
  standalone: false,
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss',
  providers:[DatePipe]
})
export class CartsComponent implements OnInit {
  cartItems: { item: IProduct, quantity: string }[] = []
  total: number = 0
orderBody:ICartOrderBody={}as ICartOrderBody

  constructor(private _Router: Router,
    private datePipe: DatePipe,
    private _CartService:CartService,
    private _ToastrService:ToastrService,
  private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getCartProducts()
    this.getTotal()
  }
  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!)
    }
  }
  getTotal() {
    this.total = 0
    if ('cart' in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem('cart')!)
      if (this.cartItems) {
        for (let cartItem of this.cartItems) {
          this.total += (cartItem.item.price * +cartItem.quantity)
        }
      }
    }
  }
  showDetails(id: number) {
    this._Router.navigateByUrl(`/user/product-details/${id}`)
  }
  changeNumber(index: number, quantity: any) {
    this.cartItems[index].quantity = (parseInt(quantity.value) + 1).toString();
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
    this.getTotal()
  }
  increaceQuantity(index: number) {
    this.cartItems[index].quantity = (parseInt(this.cartItems[index].quantity) + 1).toString();
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
    this.getTotal()
  }
  decreaceQuantity(index: number) {
    this.cartItems[index].quantity = (parseInt(this.cartItems[index].quantity) - 1).toString();
    localStorage.setItem('cart', JSON.stringify(this.cartItems))
    this.getTotal()
  }
  clearCart() {
    localStorage.removeItem('cart')
    this.cartItems = []
    this.total = 0
  }
  delete(index: number) {
    if ("cart" in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem("cart")!)
      this.cartItems.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(this.cartItems))
      this.getCartProducts()
      this.getTotal()
    }
  }
  order(){
    const productIdQuantity = this.cartItems.map(product => ({productId:product.item.id,quantity:product.quantity}));
    this.orderBody.products=productIdQuantity
    let date=new Date()
    this.orderBody.date=this.datePipe.transform(date,'yyyy-MM-dd')!
    this.orderBody.userId=1
    this.createCartCall(this.orderBody)
  }
  createCartCall(orderBody: ICartOrderBody) {
    this.spinner.show()
    this._CartService.addCart(orderBody).subscribe({
      next: (res) => {
        this.spinner.hide()
        this._ToastrService.success(`Cart Ordered Successfully`, 'Error');
      },
      error: (err) => {
        this.spinner.hide()
        this._ToastrService.error(`${err.error}`, 'Error');
      }
    })
  }
}



