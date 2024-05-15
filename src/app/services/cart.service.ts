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
    // this.subTotal += totalPriceOfProduct;

    const isProductInCart = this.cart.some(item => item.productId === product.productId);

    if (!isProductInCart) {
      this.cart.push({ ...product, quantity, totalPriceOfProduct })
    } else {
      this.cart.forEach((item, index) => {
        if (item.productId === product.productId) {
          this.cart[index].quantity = this.cart[index].quantity + quantity;
          this.cart[index].totalPriceOfProduct += totalPriceOfProduct;
        }
      })
    }
  }

  getCart() {
    return this.cart;
  }

  getSubTotal() {
    let totalPrice = 0;
    this.cart.forEach(item => totalPrice = totalPrice + item.totalPriceOfProduct)
    return totalPrice;
  }

  deleteProductFromCart(product: IProduct) {
    const findIndex = this.cart.findIndex(item => item.productId === product.productId)
    this.cart.splice(findIndex, 1);
  }

  reCaculateTotal(quantity: number, productId: number){
    this.cart.map(item => {
      if(item.productId === productId){
        item.quantity = quantity;
        item.totalPriceOfProduct = quantity * item.productPrice;
      } 
      return item;
    })
  }
}
