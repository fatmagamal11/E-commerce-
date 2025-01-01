import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { Observable } from 'rxjs';
import { IProduct } from '../../interfaces/Iproduct.intrface';

@Injectable({
  providedIn: 'root'
})
export class SelectedCategoryService {
private apiUrl=`${environment.apiUrl}/products/category`
  constructor(private _HttpClient:HttpClient) { }
  getProductsByCategoryName(categoryName:string):Observable<IProduct[]>{
   return this._HttpClient.get<IProduct[]>(`${this.apiUrl}/${categoryName}`)
  }
}
