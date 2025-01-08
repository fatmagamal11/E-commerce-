import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IProduct } from '../../Models/Iproduct.intrface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.apiUrl}/products`
  constructor(private _HttpClient: HttpClient) { }

  getAllProducts() :Observable<IProduct[]>{
    return this._HttpClient.get<IProduct[]>(this.apiUrl)
  }
  getProductById(id:number) :Observable<IProduct>{
    return    this._HttpClient.get<IProduct>(`${this.apiUrl}/${id}`)
  }
  addProduct(ProductAdded:any):Observable<IProduct>{
    return this._HttpClient.post<IProduct>(this.apiUrl,ProductAdded)
  }

}
