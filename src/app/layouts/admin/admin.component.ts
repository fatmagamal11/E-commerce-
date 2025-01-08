import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,

  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  adminHeader: string = 'Market-Admin'
  rootLink: string = 'admin/products'
  productsLink: string = this.rootLink
  cartLink: string = 'admin/cart'
}
