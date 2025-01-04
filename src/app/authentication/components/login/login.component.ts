import { Component } from '@angular/core';
import { ILogin } from '../../../interfaces/ILogin';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  uName: string = ''
  password: string = ''

  constructor(private _LoginService:LoginService,private _ToastrService:ToastrService,private _Router:Router,private spinner: NgxSpinnerService){

  }
  loginBody: ILogin = {
    username: this.uName,
    password: this.password
  }
  login(formField: any) {
    this.spinner.show();

    this.loginServiceCall(formField)
  }
  loginServiceCall(formField:any){
    
    this._LoginService.login( formField.value).subscribe({
      next:(token)=>{
        this.spinner.hide();
        localStorage.setItem('token',JSON.stringify(token) )
        this._ToastrService.success("Login Successfully","Welcome ...!")
        this._Router.navigateByUrl('/user/all-product')
      },
      error:(err)=>{
        this.spinner.hide();
        this._ToastrService.error(`${err.error}`,"faild to Login ...!")

      }
    })
  }
}
