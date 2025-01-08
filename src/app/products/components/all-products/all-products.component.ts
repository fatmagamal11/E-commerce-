import { IProduct } from '../../../Models/Iproduct.intrface';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { SelectedCategoryService } from '../../services/selected-category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  filteredProducts: IProduct[] = [] as IProduct[]
  spinner: boolean = false;
  titleForAllProduct: string = 'categories :'
  categories: string[] = []
  cartProducts: { item: IProduct, quantity: string }[] = []

  @Input() selectedCategory: string = 'All'
  @Input() clickedProduct: { item: IProduct, quantity: string } = {} as { item: IProduct, quantity: string }

  constructor(private _ProductsService: ProductsService,
    private _CategoriesService: CategoriesService,
    private _SelectedCategoryService: SelectedCategoryService,
    private _ToastrService: ToastrService
  ) { }


  ngOnInit(): void {
    this.getProducts();
    this.getCategories()
  }
  
  addClickedProduct(selectedProductFromChild: { item: IProduct, quantity: string }) {
    this.clickedProduct = selectedProductFromChild
    let idOfProduct = this.clickedProduct?.['item'].id
    if ("cart" in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem("cart")!)
      let checkedProductExist = this.cartProducts.find(product => product.item.id == idOfProduct)
      if (checkedProductExist) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "element exist before!",
          
        });
      }
      else {
        this.cartProducts.push(this.clickedProduct)
        localStorage.setItem("cart", JSON.stringify(this.cartProducts))
      }

    }
    else {
      this.cartProducts.push(this.clickedProduct)
      localStorage.setItem("cart", JSON.stringify(this.cartProducts))
    }
  }
  selectionChanged(categorySelected: string) {
    this.selectedCategory = categorySelected
    if (this.selectedCategory == 'All') {
      this.getProducts();
    } else {
      this.getFilteredProducts();
    }
  }

  getProducts(): void {
    this.spinner = true
    this._ProductsService.getAllProducts().subscribe({
      next: (resProducts) => {
        this.spinner = false
        this.filteredProducts = resProducts
      }
      , error: (err) => {
        this._ToastrService.error(`${err.error}`, 'Error');
        this.spinner = false

      }
    });
  }
  getFilteredProducts(): void {
    this.spinner = true

    this._SelectedCategoryService.getProductsByCategoryName(this.selectedCategory).subscribe({
      next: (res) => {
        this.spinner = false
        this.filteredProducts = res
      },
      error: (err) => {

        this.spinner = false
        this._ToastrService.error(`${err.error}`, 'Error');
      }
    })
  }
  getCategories(): void {
    this._CategoriesService.getAllCategories().subscribe({
      next: (resProducts) => {
        this.categories = resProducts
      }
      , error: (err) => {
        this._ToastrService.error(`${err.error}`, 'Error');

      }
    })
  }
}
