import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-view',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './cart-view.component.html',
  styleUrl: './cart-view.component.css'
})
export class CartViewComponent implements OnInit{
  totalPrice: number;
  
  customerInformationForm: FormGroup;

  constructor(
    private _cart: CartService,
    private _router: Router
  ){
    this.totalPrice = 0;
    this.customerInformationForm = new FormGroup({
      fullName: new FormControl("", [Validators.required]),
      address: new FormControl("", Validators.required),
      cardNumber: new FormControl("", Validators.required)
    })
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
