import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = `${environment.apiUrl}/products/categories`

  constructor(private _HttpClient: HttpClient) { }
  getAllCategories(): Observable<string[]> {
    return this._HttpClient.get<string[]>(this.apiUrl)
  }
}
