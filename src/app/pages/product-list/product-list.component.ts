import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { APIResponseModel, CategoryModel, IProduct } from '../../core/model/Model';
import { LazyImageDirective } from '../../shared/directive/lazy-image.directive';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, LazyImageDirective, CommonModule, AsyncPipe, RouterLink, RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  constructor(
    private _cart: CartService,
    private _product: ProductService,
    private _router: Router
  ){}


  ngOnInit(): void {
    this.getAllProduct();
  }

  getProductByCategory(cateId: number) {
  }

  getAllProduct() {
    return this._product.getAllProducts()
  }
  
  addToCart(product: IProduct): void{
    this._cart.addToCart(product);
    this._router.navigateByUrl(`/products/${product.productId}`);
  }
}
