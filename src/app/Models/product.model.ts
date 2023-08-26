import { Brand } from "./brand.model"

export interface Product {
  "id": string,
  "name":string ,
  "description":string,
  "price": string,
  "admin_id":string,
  "availability":string,
  "quantity": string,
  "admin_name": string,
  "brand": Brand,
  "images": {
    "id": string,
    "mainGallery":string,
    "gallery1": string,
    "gallery2": string,
    "gallery3":string,
    "gallery4": string,
    "product_id": string
  }

}
