import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../../interfaces/Iproduct.intrface';

@Component({
  selector: 'app-products-details',
  standalone: false,

  templateUrl: './products-details.component.html',
  styleUrl: './products-details.component.scss'
})
export class ProductsDetailsComponent implements OnInit {

  product: IProduct = {} as IProduct

  loading:boolean=false
  constructor(private _ActivatedRoute: ActivatedRoute
    , private _ProductsService: ProductsService,
    private _Location: Location) { }

  ngOnInit(): void {
    this.getCurrentId()
  }
  getCurrentId() {
    this._ActivatedRoute.paramMap.subscribe(
      (paramMap) => {
        let currentId = Number(paramMap.get('id'))
        this.getCurrentProductWithId(currentId)
      }
    )
  }
  getCurrentProductWithId(currentId: number) {
    this.loading=true
    this._ProductsService.getProductById(currentId).subscribe({
      next: (res) => {
        this.loading=false
        this.product = res
      }
    })
  }
  back() {
    this._Location.back()
  }
}
