import { Component, OnInit, TemplateRef } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../../Models/Iproduct.intrface';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-products-admin',
  standalone: false,
  templateUrl: './products-admin.component.html',
  styleUrl: './products-admin.component.scss'
})
export class ProductsAdminComponent implements OnInit {
  products: IProduct[] = []
  loading: boolean = false
  categories:string[]=[]
  
  constructor(private _ProductsService: ProductsService,
    private _CategoriesService:CategoriesService,
    private _ToastrService: ToastrService,
    private _Router: Router,
    private _NgbModal: NgbModal) { }
  ngOnInit(): void {
    this.loading = true
    this.categorySreviceCall()
    this.callProductsService()
  }
  callProductsService() {
    this._ProductsService.getAllProducts().subscribe({
      next: (res) => {
        this.products = res
        this.loading = false
      },
      error: (err) => {
        this.loading = false
        this._ToastrService.error(err.error, 'Error')
      }
    })
  }
  showDetails(id: number) {
    this._Router.navigateByUrl(`/user/product-details/${id}`)
  }
  modalShow(content: TemplateRef<any>) {
    this._NgbModal.open(content, { centered: true });
  }
  modalClosed() {
    this.loading = true
    this.callProductsService()
  }
  categorySreviceCall() {
    this._CategoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categories = res
      },
      error: (err) => {
        this._ToastrService.error(`${err.error}`, "Error Occure !")
      }
    })
  }
}
