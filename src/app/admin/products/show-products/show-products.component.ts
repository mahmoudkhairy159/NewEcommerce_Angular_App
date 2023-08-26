import { Component } from '@angular/core';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent {
  products= [
    {
      "id": 1,
      "name": "product 1",
      "description": "123",
      "price": 20,
      "admin_id": 1,
      "admin_name": "mky",
      "brand": {
        "id": 1,
        "photo": null,
        "category": "tshirts",
        "type": "men",
        "admin_id": 1,
        "name": "Abu Diyab"
      },
      "images": {
        "id": 1,
        "mainGallery": "products/product 1_1/product 1_mainGallery.jpg",
        "gallery1": null,
        "gallery2": null,
        "gallery3": "products/product 1_1/product 1_gallery3.jpg",
        "gallery4": null,
        "product_id": 1
      },
        "availability": "available",
        "quantity":"30"
    },
    {
      "id": 2,
      "name": "product 1",
      "description": "123",
      "price": 20,
      "admin_id": 1,
      "admin_name": "mky",
      "brand": {
        "id": 1,
        "photo": null,
        "category": "tshirts",
        "type": "men",
        "admin_id": 1,
        "name": "Abu Diyab"
      },
      "images": {
        "id": 2,
        "mainGallery": "products/product 1_2/product 1_mainGallery.jpg",
        "gallery1": "products/product 1_2/product 1_gallery1.jpg",
        "gallery2": "products/product 1_2/product 1_gallery2.jpg",
        "gallery3": "products/product 1_2/product 1_gallery3.jpg",
        "gallery4": null,
        "product_id": 2
      },
      "availability": "available",
      "quantity":"30"

    },
    {
      "id": 3,
      "name": "product 1",
      "description": "123",
      "price": 20,
      "admin_id": 1,
      "admin_name": "mky",
      "brand": {
        "id": 1,
        "photo": null,
        "category": "tshirts",
        "type": "men",
        "admin_id": 1,
        "name": "Abu Diyab"
      },
      "images": {
        "id": 3,
        "mainGallery": "products/product 1_3/product 1_mainGallery.jpg",
        "gallery1": "products/product 1_3/product 1_gallery1.jpg",
        "gallery2": "products/product 1_3/product 1_gallery2.jpg",
        "gallery3": "products/product 1_3/product 1_gallery3.jpg",
        "gallery4": null,
        "product_id": 3
      },
      "availability": "available",
      "quantity":"30"

    }
  ];
}
