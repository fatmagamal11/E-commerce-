import { IProduct } from './../../../interfaces/Iproduct.intrface';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { CategoriesService } from '../../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { SelectedCategoryService } from '../../services/selected-category.service';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss',
})
export class AllProductsComponent implements OnInit {
  filteredProducts: IProduct[] = [] as IProduct[]
  categories: string[] = []
  selectedCategory: string = 'All'

  constructor(private _ProductsService: ProductsService,
    private _CategoriesService: CategoriesService,
    private _SelectedCategoryService: SelectedCategoryService,
    private _ToastrService: ToastrService
  ) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }
  
  changeSelection() {
    if (this.selectedCategory == 'All') {
      this.getProducts();
    } else {
      this.getFilteredProducts();
    }
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
  getProducts(): void {
    this._ProductsService.getAllProducts().subscribe({
      next: (resProducts) => {
        this.filteredProducts = resProducts
      }
      , error: (err) => {
        this._ToastrService.error(`${err.error}`, 'Error');

      }
    });
  }
  getFilteredProducts(): void {
    this._SelectedCategoryService.getProductsByCategoryName(this.selectedCategory).subscribe({
      next: (res) => {
        this.filteredProducts = res
      },
      error: (err) => {

        this._ToastrService.error(`${err.error}`, 'Error');
      }
    })
  }
}
