import { Component } from '@angular/core';
import { ILogin } from '../../../interfaces/ILogin';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  uName: string = ''
  password: string = ''

  constructor(private _LoginService:LoginService,private _ToastrService:ToastrService,private _Router:Router){

  }
  loginBody: ILogin = {
    username: this.uName,
    password: this.password
  }
  login(formField: any) {
    this._LoginService.login( formField.value).subscribe({
      next:(token)=>{
        localStorage.setItem('token',JSON.stringify(token) )
        this._Router.navigateByUrl('/')
        this._ToastrService.success("Login Successfully","Welcome ...!")
      },
      error:(err)=>{
        this._ToastrService.error(`${err.error}`,"faild to Login ...!")

      }
    })
  }
}
