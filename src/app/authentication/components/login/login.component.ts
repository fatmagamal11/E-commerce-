import { Component, OnInit } from '@angular/core';
import { ILogin } from '../../../Models/Login';
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
  root:string=''
  checked:boolean=false
  
  constructor(private _LoginService:LoginService,private _ToastrService:ToastrService,private _Router:Router,private spinner: NgxSpinnerService){

  }
  loginBody: ILogin = {
    username: this.uName,
    password: this.password
  }
  login(formField: any) {
    this.spinner.show();
    if(this.checked==true){
      this.root='admin'
    }
    else{
      this.root='user'
    }
    this.loginServiceCall(formField)
  }
  loginServiceCall(formField:any){
    
    this._LoginService.login( formField.value).subscribe({
      next:(token)=>{
        this.spinner.hide();
        localStorage.setItem('token',JSON.stringify(token) )
        this._ToastrService.success("Login Successfully","Welcome ...!")
        this._Router.navigateByUrl(`/${this.root}/products`)
      },
      error:(err)=>{
        this.spinner.hide();
        this._ToastrService.error(`${err.error}`,"faild to Login ...!")

      }
    })
  }
}
