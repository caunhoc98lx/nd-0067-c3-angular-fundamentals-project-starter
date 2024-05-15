import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICart } from '../../core/model/Model';
import { CartService } from '../../services/cart.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart-item-view',
  standalone: true,
  imports: [],
  templateUrl: './cart-item-view.component.html',
  styleUrl: './cart-item-view.component.css'
})
export class CartItemViewComponent implements OnInit {
  @Input() product: ICart;
  @Output() changeInputFn = new EventEmitter<number>();

  quantityChange: number;
  constructor(
    private _cart: CartService
  ){
    this.product = {
      productId: 0,
      productSku: '',
      productName: '',
      productPrice: 0,
      productShortName: '', 
      productDescription: '',
      createdDate: '',
      deliveryTimeSpan: '',
      categoryId: 0,
      productImageUrl: '',
      categoryName: '',
      quantity: 0,
      totalPriceOfProduct: 0
    }
    this.quantityChange = this.product.quantity;
  }

  ngOnInit(): void {
    this.quantityChange = this.product.quantity;
  }

  changeFn(event: any) {
    this.changeInputFn.emit(event.target.value);
  }

}
