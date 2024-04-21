import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, CommonModule, FormsModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit{
  fullName: string;
  address: string;
  cardNumber: string;
  totalPrice: number;

  constructor(
    private _cart: CartService,
    private _router: Router
  ){
    this.fullName = '';
    this.address = '';
    this.cardNumber = '';
    this.totalPrice = 0;
  }

  ngOnInit(): void {}

  getCart() {
    return this._cart.getCart();
  }

  onSubmit(){
    this._router.navigateByUrl(`/success-view`);
  }

  countTotalPrice(){
    return this._cart.getSubTotal()
  }
}
