import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable, map, take, tap } from 'rxjs';
import { AdminAuthService } from './admin-auth.service';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(private adminAuthService: AdminAuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.adminAuthService.admin.pipe(take(1), map(admin => {
      const isAuth = !!admin;
      if (isAuth) {
        return true;
      }
      return this.router.createUrlTree(['/admin/login']);

    })
    );
  }

}
