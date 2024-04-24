import { Injectable, OnInit } from '@angular/core';
import { IProduct } from '../core/model/Model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements OnInit{
  products: any;
  url: string = "/assets/data.json";

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe(res => {
      this.products = res;
    });
  }
  
  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.products = res;
    });
  }

  getProductDetails(productId: number) {
    return this.products.filter((item: any) => item.productId === productId)
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
}
