import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, catchError, map, tap, throwError } from "rxjs";
import { Admin } from 'src/app/Models/admin.model';
import { AdminData } from 'src/app/Models/adminData.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  baseUrl = 'http://localhost/api';
  error = new Subject<string>();
  admin = new BehaviorSubject<Admin>(null);
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router, private LocalStorageService: LocalStorageService) { }



  //login
  login(credentials: { email: string, password: string }) {
    this.http.post(`${this.baseUrl}/admin/auth/login`, credentials).pipe(
      map(responseData => {
        let adminData: AdminData;
        let token: string;
        if (responseData.hasOwnProperty('data')) {
          adminData = responseData['data'].admin;
          token = responseData['data'].token;
        }

        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        const admin = new Admin(adminData, token, expirationDate);

        this.LocalStorageService.set('admin', JSON.stringify(admin));
        this.autoLogout(3600 * 1000);
        return admin;
      }),
      catchError(this.handleError)).subscribe(
        responseData => {
          this.admin.next(responseData);
          this.router.navigate(['/admin/dashboard']);
        }
      );
  }
  //register
  register(adminData: {
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    password_confirmation: string,
  }) {
    this.http.post(`${this.baseUrl}/admin/auth/register`, adminData).pipe(map(responseData => {
      let adminData: AdminData;
      let token: string;
      if (responseData.hasOwnProperty('data')) {
        adminData = responseData['data'].admin;
        token = responseData['data'].token;
      }

      const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
      const admin = new Admin(adminData, token, expirationDate);

      this.LocalStorageService.set('admin', JSON.stringify(admin));
      this.autoLogout(3600 * 1000);
      return admin;
    }), catchError(this.handleError)).subscribe(
      responseData => {
        console.log(responseData);
        this.admin.next(responseData);
        this.router.navigate(['/admin/dashboard']);
      }, error => {
        this.error.next(error.message);
      }
    );
  }

  // handling errors
  private handleError(errorRes: HttpErrorResponse) {
    let errorMessage = 'An Unknown Error Occurred!';
    if (errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.message) {
      case 'Un Authenticated':
        errorMessage = 'Un Authenticated';
        break;
    }
    return throwError(errorMessage);
  }

  //auto logout
  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  //logout
  logout() {
    this.http.post(`${this.baseUrl}/admin/logout`, null).pipe(
      map(responseData => {
        let message: string;
        if (responseData.hasOwnProperty('status') && responseData['status'] == true) {
          message = responseData['message'];
          this.LocalStorageService.remove('admin');
          if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
          }
          this.tokenExpirationTimer = null;
        }
        return message;
      }),catchError(this.handleError)).subscribe(
        responseData => {
          this.admin.next(null);
          console.log(responseData);
          this.router.navigate(['admin/login']);
        }
      );






  }
  //auto login
  autoLogin() {
    let admin = JSON.parse(this.LocalStorageService.get('admin'));

    if (!admin) {
      return;
    }
    const loadedAdmin = new Admin(admin.AdminData, admin.token, new Date(admin.token_expirationDate));
    if (loadedAdmin.getAuthToken()) {
      this.admin.next(loadedAdmin);
      const expirationDuration = new Date(admin.token_expirationDate).getTime() - new Date().getTime();
      this.autoLogout(expirationDuration);
    }
  }


  //show profile details
  getAdminData(id: string) {
    return this.http.get(`${this.baseUrl}/admin/showProfileDetails/` + id).pipe(
      map(responseData => {
        let adminData: AdminData;
        if (responseData.hasOwnProperty('data')) {
          adminData = responseData['data'];
        }
        return adminData;
      }), catchError(this.handleError));

  }
  //update profile
  UpdateAdminData(data: any, id: string) {

    return this.http.put(`${this.baseUrl}/admin/updateProfileDetails/${id}`, data).pipe(map(responseData => {
      let adminData: AdminData;
      if (responseData.hasOwnProperty('data')) {
        adminData = responseData['data'];
      }
      return adminData;
    }), catchError(this.handleError));
  }

  changePassword(data: any, id: string) {
    return this.http.put(`${this.baseUrl}/admin/changePassword/${id}`, data).pipe(map(responseData => {
      let adminData: AdminData;
      if (responseData.hasOwnProperty('data')) {
        adminData = responseData['data'];
      }
      return adminData;
    }), catchError(this.handleError));
  }

}
