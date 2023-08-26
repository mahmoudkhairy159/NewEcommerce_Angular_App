
import { HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { take, exhaustMap } from 'rxjs';
import { AdminAuthService } from "./admin-auth.service";
@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  admin:any;

  constructor(private adminAuthService:AdminAuthService ) { }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    this.adminAuthService.admin.pipe(take(1)).subscribe(admin => {
      this.admin = admin;
    });


      return this.adminAuthService.admin.pipe(take(1), exhaustMap(admin => {
        if (req.url == 'http://localhost/api/admin/auth/login' || req.url == 'http://localhost/api/admin/auth/register') {
        return next.handle(req);
        }
        let token = admin.getAuthToken();
        if (!token) {
          return next.handle(req);
          }
         let ReqParams = new HttpParams();
        // ReqParams = ReqParams.append('api_password', environment.api_password);
        ReqParams = ReqParams.append('lang', 'en');
        const modifiedRequest = req.clone({
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application',
            'Access-Control-Allow-Origin': '*',
            'Authorization': `Bearer ${token}`
          }),

          params: ReqParams,
        });

        return next.handle(modifiedRequest);
      }));





}

}
