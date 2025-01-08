import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoriesService } from '../../../products/services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../products/services/products.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modal',
  standalone: false,

  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent implements OnInit {
  @Input() modal: any
  @Output() onModalClosed:EventEmitter<any>=new EventEmitter()
 @Input() categories: string[] = []
  formFields: FormGroup;
  title:string='Product Category :'
  constructor( private spinner: NgxSpinnerService,private _CategoriesService: CategoriesService, private _ProductsService: ProductsService, private _ToastrService: ToastrService, private FB: FormBuilder) {

    this.formFields = this.FB.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(6)]],
      category: ['', [Validators.required]],
      image: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  addProduct() {
    this.addProductServiceCall(this.formFields.value)
  }
  recieveSelectedCat(event:string){
    this.formFields.get('category')?.setValue(event)

  }
  close()
  {
    this.onModalClosed.emit()
  }
  addProductServiceCall(productAdded: any) {
    this.spinner.show()
    this._ProductsService.addProduct(productAdded).subscribe({
      next: (res) => {
        this.spinner.hide()
        this._ToastrService.success(`Product ${res.title} Added Successfully`, "Success !")
      },
      error: (err) => {
        this.spinner.hide()
        this._ToastrService.success(`Product ${err.error} Added Successfully`, "Error occure")

      }
    })
  }
  // Method to handle file input
  onFileSelected(event: any): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Generate a URL for the selected file
      this.formFields.value.image = URL.createObjectURL(file);
    }
  }
  

}

