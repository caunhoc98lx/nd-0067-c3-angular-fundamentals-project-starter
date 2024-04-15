import { Injectable } from '@angular/core';
import { IProduct } from '../core/model/Model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: IProduct[] = []
  constructor() { }

  addToCart(product: IProduct) {
    this.cart.push(product)
  }
}
