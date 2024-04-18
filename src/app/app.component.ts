import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartPlus, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule, FontAwesomeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "angular-eCommerce-app"
  faCartPlus = faCartPlus
  faXmarkCircle = faXmarkCircle

  constructor(
    private _cart: CartService,
  ) {
  }

  getCart() {
    return this._cart.getCart();
  }

  getSubTotal(){
    return this._cart.getSubTotal();
  }
}
