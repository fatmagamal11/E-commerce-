import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  userHeader:string='Market'
   rootLink:string='user/products'
    productsLink:string=this.rootLink
    cartLink:string='user/cart'
}
