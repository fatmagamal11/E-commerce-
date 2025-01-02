import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IToken } from '../../interfaces/itoken';
import { ILogin } from '../../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private apiUrl=`${environment.apiUrl}/auth/login`

  constructor(private _HttpClient :HttpClient) { }
  login(loginBody:ILogin):Observable<IToken>{
  return  this._HttpClient.post<IToken>(this.apiUrl,loginBody)
  }

  isLoggedIn():boolean{
    return localStorage.getItem('token')?true:false
  }
  
}
