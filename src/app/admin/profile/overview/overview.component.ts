import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { AdminData } from 'src/app/Models/adminData.model';
import { ActivatedRoute, Params } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { AdminAuthService } from '../../services/admin-auth/admin-auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
  adminData: AdminData;
  paramsSubscription: Subscription;
  id: string;
  admin = JSON.parse(this.localStorageService.get('admin'));

  constructor(private route:ActivatedRoute, private localStorageService:LocalStorageService, private adminAuthService:AdminAuthService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        if (this.admin) {
          this.id = params['id'];
          //this.adminData = this.admin.admin;
          this.getAdminData();
        }
      }
    );
  }
  getAdminData() {
    this.adminAuthService.getAdminData(this.id).subscribe(responseData => {
      this.adminData = responseData;
      this.admin.admin = responseData;
      this.localStorageService.set('admin',  JSON.stringify(this.admin));
    }, error => {
      console.log(error);
    });
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
