import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { ICartOrderBody } from '../../interfaces/cartBody';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private apiUrl:string=`${environment.apiUrl}/carts`
  constructor(private _HttpClient:HttpClient) { }
  addCart(cartBody:ICartOrderBody):Observable<any>{
    return this._HttpClient.post(this.apiUrl,cartBody)
  }
}
