import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  headerDisplay:boolean=true
  constructor(private _ActivatedRoute: ActivatedRoute,private router: Router){
    console.log(this._ActivatedRoute.snapshot)
    console.log(this.router.events)
    // console.log(this._ActivatedRoute?.snapshot['_routerState'])
  }

  logOut(){
    localStorage.removeItem('token')
  }
}
