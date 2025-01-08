import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carts-admin',
  standalone: false,
  
  templateUrl: './carts-admin.component.html',
  styleUrl: './carts-admin.component.scss'
})
export class CartsAdminComponent {

  constructor(private _NgbModal:NgbModal) {
    
  }
	openVerticallyCentered(content: TemplateRef<any>) {
		this._NgbModal.open(content, { centered: true });
	}



 
}
