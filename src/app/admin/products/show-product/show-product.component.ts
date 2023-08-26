import { Component } from '@angular/core';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent {
  product= {
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
      "mainGallery": "../assets/themes/my-theme/media/photos/photo1.jpg",
      "gallery1": "../assets/themes/my-theme/media/photos/photo1.jpg",
      "gallery2": "../assets/themes/my-theme/media/photos/photo1.jpg",
      "gallery3": "../assets/themes/my-theme/media/photos/photo1.jpg",
      "gallery4": "../assets/themes/my-theme/media/photos/photo1.jpg",
      "product_id": 1
    },
    "availability": "available",
    "quantity": "5"
  };
}
