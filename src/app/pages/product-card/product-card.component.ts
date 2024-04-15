import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../core/model/Model';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, RouterModule, FontAwesomeModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent implements OnInit {

  faCircleArrowLeft = faCircleArrowLeft;
  productId: number;
  productPrice: number;
  product: IProduct | undefined

  constructor(
    private route: ActivatedRoute,
    public _product: ProductService
    
  ){
    this.productId = 0;
    this.productPrice = 0;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = parseInt(params['id'])
      this.product = this.getProductById(parseInt(params['id']))
      this.productPrice = this.getProductById(parseInt(params['id'])).productPrice
    });
  }

  getProductById(productId: number){
    const result = this._product.getProductDetails(productId);
    return result[0];
  }

  handleChangeNumberOfProduct(){

  }
}
