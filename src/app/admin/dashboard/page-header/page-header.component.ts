import { Component } from '@angular/core';
import { AdminAuthService } from '../../services/admin-auth/admin-auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AdminData } from 'src/app/Models/adminData.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent {
  constructor(private adminAuthService: AdminAuthService,private localStorageService:LocalStorageService) {}
  private adminSubject: Subscription;
  isAuthenticated = false;
  adminData: AdminData;
  admin= JSON.parse(this.localStorageService.get('admin'));


  ngOnInit(): void {
    this.adminSubject = this.adminAuthService.admin.subscribe(admin => {
      this.isAuthenticated = !admin ? false : true;
      if (this.isAuthenticated && this.admin) {
        this.adminData = this.admin.admin;
      }
    });


  }
  onLogout() {
    this.adminAuthService.logout();
  }
  ngOnDestroy(): void {
    this.adminSubject.unsubscribe();
  }
}
