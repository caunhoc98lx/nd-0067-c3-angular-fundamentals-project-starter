import { Injectable } from '@angular/core';
import { ICart, IProduct } from '../core/model/Model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: ICart[] = []
  subTotal: number;
  constructor() {
    this.subTotal = 0;
  }

  addToCart(product: IProduct, quantity: number, totalPriceOfProduct: number) {
    this.subTotal += totalPriceOfProduct;

    const isProductInCart = this.cart.some(item => item.productId === product.productId);
    
    if(!isProductInCart){
      this.cart.push({ ...product, quantity, totalPriceOfProduct })
    }

    this.cart.forEach((item, index) => {
      if (item.productId === product.productId) {
        this.cart[index].quantity = this.cart[index].quantity + quantity;
        this.cart[index].totalPriceOfProduct += totalPriceOfProduct;
      }
    })
  }

  getCart() {
    return this.cart;
  }

  getSubTotal() {
    return this.subTotal;
  }
  
  deleteProductFromCart(product: IProduct){
    const findIndex = this.cart.findIndex(item => item.productId === product.productId)
    this.cart.splice(findIndex, 1);
  }
}
