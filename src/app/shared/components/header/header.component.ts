import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() headerName:string=''
  @Input() rootLink:string=''
  @Input() productsLink:string=''
  @Input() cartLink:string=''
  
  headerDisplay:boolean=true
  constructor(private _ActivatedRoute: ActivatedRoute,private router: Router){
    console.log(this._ActivatedRoute.snapshot)
    console.log(this.router.events)
  }

  logOut(){
    localStorage.removeItem('token')
  }
}
