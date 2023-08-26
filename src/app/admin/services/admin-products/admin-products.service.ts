import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, map } from "rxjs";
import { Product } from "src/app/Models/product.model";

@Injectable({ providedIn: 'root' })
export class AdminProductsService{

  error = new Subject <string>();
  products:Product[];
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient,private router :Router) { }

  getAllProducts() {
    return this.http.get(`${this.baseUrl}/admin/products`).pipe(
        map(responseData => {
          let  products={};
            if (responseData.hasOwnProperty('data')) {
               products=  responseData['data'] ;
          }
          return products;
        })
    );
  }


   
  createProduct(data:any ) {
    return this.http.post(`${this.baseUrl}/admin/products/`,data ).pipe(
      map(responseData => {
        let product: Product;
        if (responseData.hasOwnProperty('data')) {
          product = responseData['data'];
        }
        return product;
      })
    );
  }
  updateProduct(data:any,id:string ) {
    return this.http.put(`${this.baseUrl}/admin/products/${id}`,data ).pipe(
      map(responseData => {
        let product: Product;
        if (responseData.hasOwnProperty('data')) {
          product = responseData['data'];
        }
        return product;
      })
    );
  }

  getProduct(id:string) {
    return this.http.get(`${this.baseUrl}/admin/products/${id}` ).pipe(
      map(responseData => {
        let product: Product;
        if (responseData.hasOwnProperty('data')) {
          product = responseData['data'];
        }
        return product;
      })
    );
  }


  deleteProduct(id: string) {
    this.http.delete(`${this.baseUrl}/admin/products/${id}`).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      this.error.next(error.message);
    });
  }

 
}
