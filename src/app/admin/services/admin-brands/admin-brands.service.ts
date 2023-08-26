import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, map } from "rxjs";
import { Brand } from "src/app/Models/brand.model";

@Injectable({ providedIn: 'root' })
export class AdminBrandsService {

  error = new Subject<string>();
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient, private router: Router) { }

  getAllBrands() {
    return this.http.get(`${this.baseUrl}/admin/brands`).pipe(
      map(responseData => {
        let data:any;
        if (responseData.hasOwnProperty('data')) {
          data = responseData['data'];
        }
        return data;
      })
    );
  }



  createBrand(data: any) {

    return this.http.post(`${this.baseUrl}/admin/brands`, data).pipe(
      map(responseData => {
        let brand: Brand;
        if (responseData.hasOwnProperty('data')) {
          brand = responseData['data'];
        }
        console.log(responseData);
        return brand;
      })
    );
  }
  updateBrand(data: any, id: string) {
    return this.http.put(`${this.baseUrl}/admin/brands/${id}`, data).pipe(
      map(responseData => {
        let brand: Brand;
        if (responseData.hasOwnProperty('data')) {
          brand = responseData['data'];
        }
        return brand;
      })
    );
  }

  getBrand(id: string) {
    return this.http.get(`${this.baseUrl}/admin/brands/${id}`).pipe(
      map(responseData => {
        let brand: Brand;
        if (responseData.hasOwnProperty('data')) {
          brand = responseData['data'];
        }
        return brand;
      })
    );
  }


  deleteBrand(id: string) {
   this.http.delete(`${this.baseUrl}/admin/brands/${id}`).subscribe(responseData => {
    console.log(responseData);
    this.router.navigate(['/admin/dashboard/brands']);
  }, error => {
    this.error=error.message;
  });;
  }


}
