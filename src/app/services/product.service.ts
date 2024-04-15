import { Injectable } from '@angular/core';
import { IProduct } from '../core/model/Model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: IProduct[];
  constructor() {
    this.productList =  [
      {
        productId: 1,
        productSku: "Durian",
        productName: "Durian",
        productPrice: 30,
        productShortName: "Durian",
        productDescription: "Durian",
        createdDate: "2024-04-01T18:25:15.83",
        deliveryTimeSpan: "1-2days",
        categoryId: 55,
        productImageUrl: "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20fruits%20Vietnam%20Tourism-3.jpg",
        categoryName: "Fruits & Vegetables"
      },
      {
        productId: 2,
        productSku: "Star Fruit",
        productName: "Star Fruit",
        productPrice: 32,
        productShortName: "Star Fruit",
        productDescription: "the Star Fruit",
        createdDate: "2024-03-06T18:15:33.923",
        deliveryTimeSpan: "1-2",
        categoryId: 55,
        productImageUrl: "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20fruits%20Vietnam%20Tourism-5.jpg",
        categoryName: "Fruits & Vegetables"
      },
      {
        productId: 3,
        productSku: "Rambutan",
        productName: "Rambutan",
        productPrice: 72,
        productShortName: "Rambutan",
        productDescription: "Rambutan",
        createdDate: "2024-03-26T02:32:39.19",
        deliveryTimeSpan: "2",
        categoryId: 55,
        productImageUrl: "https://vietnam.travel/sites/default/files/inline-images/fruits%20in%20vietnam-5.jpg",
        categoryName: "Fruits & Vegetables"
      },
      {
        productId: 4,
        productSku: "Longan",
        productName: "Longan",
        productPrice: 566,
        productShortName: "Longan",
        productDescription: "Longan",
        createdDate: "2024-03-15T08:17:11.86",
        deliveryTimeSpan: "2-4 days",
        categoryId: 55,
        productImageUrl: "https://vietnam.travel/sites/default/files/inline-images/fruits%20in%20vietnam.jpg",
        categoryName: "Fruits & Vegetables"
      },
      {
        productId: 5,
        productSku: "Pomelo",
        productName: "Pomelo",
        productPrice: 100,
        productShortName: "Pomelo",
        productDescription: "Pomelo",
        createdDate: "2024-02-08T09:53:07.327",
        deliveryTimeSpan: "10",
        categoryId: 55,
        productImageUrl: "https://vietnam.travel/sites/default/files/inline-images/Vietnam%20Fruit%20Guide-2.jpg",
        categoryName: "Fruits & Vegetables"
      },
      {
        productId: 6,
        productSku: "Rose apple ",
        productName: "Rose apple ",
        productPrice: 100,
        productShortName: "Rose apple ",
        productDescription: "Ratnagiri Rose apple ",
        createdDate: "2024-02-08T11:27:40.297",
        deliveryTimeSpan: "1 day",
        categoryId: 55,
        productImageUrl: "https://vietnam.travel/sites/default/files/inline-images/Must%20try%20fruits%20Vietnam%20Tourism.jpg",
        categoryName: "Fruits & Vegetables"
      }
    ];
   }

  getProductDetails(productId: number) {
    console.log("productId", productId);
    return this.productList.filter((item) => item.productId === productId)
  }

  getAllProducts(){
    return this.productList;
  }
}
