import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../core/model/Model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, FontAwesomeModule, CommonModule, FormsModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {
  faCircleArrowLeft = faCircleArrowLeft;
  productId: number;
  productPrice: number;
  product: IProduct;
  numberOfProduct: number;
  quantity: number;

  constructor(
    private route: ActivatedRoute,
    public _product: ProductService,
    private _cart: CartService,

  ) {
    this.productId = 0;
    this.productPrice = 0;
    this.numberOfProduct = 0;
    this.quantity = 1;
    this.product = {
      productId: 1,
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
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = parseInt(params['id'])
      this.product = this.getProductById(parseInt(params['id']))
      this.productPrice = this.getProductById(parseInt(params['id'])).productPrice
    });
  }

  getProductById(productId: number) {
    const result = this._product.getProductDetails(productId);
    return result[0];
  }

  counter() {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  handleSubmitForm() {
    this._cart.addToCart(this.product, this.quantity, this.productPrice);
    alert("Added to cart")
  }

  handleChangeQuantity() {
    this.productPrice = this.product.productPrice * this.quantity;
  }
}
