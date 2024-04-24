import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../core/model/Model';
import { LazyImageDirective } from '../../shared/directive/lazy-image.directive';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [HttpClientModule, LazyImageDirective, CommonModule, AsyncPipe, RouterLink, RouterOutlet, RouterLinkActive, RouterModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  listProduct: IProduct[]

  constructor(
    private _product: ProductService,
    private _router: Router
  ){
    this.listProduct = []
  }


  ngOnInit(): void {
    this.getAllProduct();
  }

  getProductByCategory(cateId: number) {
  }

  getAllProduct() {
    this._product.getAllProducts().subscribe((res: IProduct[])=>{
      this.listProduct = res
    },error=> {
      alert("Error From API")
    })
  }
  
  goToDetail(product: IProduct): void{
    this._router.navigateByUrl(`/products/${product.productId}`);
  }
}
