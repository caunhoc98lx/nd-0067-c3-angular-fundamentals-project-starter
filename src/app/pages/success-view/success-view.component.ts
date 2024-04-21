import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-success-view',
  standalone: true,
  imports: [],
  templateUrl: './success-view.component.html',
  styleUrl: './success-view.component.css'
})
export class SuccessViewComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private _cart: CartService){}
  
  getTotalPrice(){
    return this._cart.getSubTotal()
  }
}
