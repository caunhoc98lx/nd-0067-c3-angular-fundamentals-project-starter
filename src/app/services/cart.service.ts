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

    const getAllProductInCart = this.getCart();
    if(getAllProductInCart.length > 0){
      getAllProductInCart.forEach((item, index) => {
        if(item.productName === product.productName){
          this.cart[index].quantity += quantity;
          this.cart[index].totalPriceOfProduct += totalPriceOfProduct;
        }else{
          this.cart.push({...product, quantity, totalPriceOfProduct})
        }
      })
    }else{
      this.cart.push({...product, quantity, totalPriceOfProduct})
    }
    
  }

  getCart(){
    return this.cart;
  }

  getSubTotal(){
    return this.subTotal;
  }
}
