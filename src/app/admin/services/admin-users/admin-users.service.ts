import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, map } from "rxjs";
import { Product } from "src/app/Models/product.model";
import { UserData } from "src/app/Models/userData.model";

@Injectable({ providedIn: 'root' })
export class AdminUsersService{

  error = new Subject <string>();
  users:UserData[];
  baseUrl = 'http://localhost/api';

  constructor(private http: HttpClient,private router :Router) { }

  getAllUsers() {
    return this.http.get(`${this.baseUrl}/admin/users`).pipe(
        map(responseData => {
          let  users={};
            if (responseData.hasOwnProperty('data')) {
               users=  responseData['data'] ;
          }
          return users;
        })
    );
  }



  createUser(data:any ) {
    return this.http.post(`${this.baseUrl}/admin/users`,data ).pipe(
      map(responseData => {
        let user: UserData;
        if (responseData.hasOwnProperty('data')) {
           user= responseData['data'];
        }
        return user;
      })
    );
  }
  updateUser(data:any,id:string ) {
    return this.http.put(`${this.baseUrl}/admin/users/${id}`,data ).pipe(
      map(responseData => {
        let user: UserData;
        if (responseData.hasOwnProperty('data')) {
           user= responseData['data'];
        }
        return user;
      })
    );
  }

  getUser(id:string) {
    return this.http.get(`${this.baseUrl}/admin/users/${id}` ).pipe(
        map(responseData => {
          let user: UserData;
          if (responseData.hasOwnProperty('data')) {
             user= responseData['data'];
          }
          return user;
      })
    );
  }


  deleteUser(id: string) {
    this.http.delete(`${this.baseUrl}/admin/users/${id}`).subscribe(responseData => {
      console.log(responseData);
      this.router.navigate(['/admin/dashboard/users']);

    }, error => {
      this.error.next(error.message);
    });
  }


}
