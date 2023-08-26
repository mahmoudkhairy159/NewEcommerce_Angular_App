import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { AdminData } from 'src/app/Models/adminData.model';
import { Subscription } from 'rxjs';
import { AdminAuthService } from '../../services/admin-auth/admin-auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent {
  @ViewChild('updateProfileForm') updateProfileForm: NgForm;
  adminData: AdminData;
  paramsSubscription: Subscription;
  id: string;
  admin = JSON.parse(this.localStorageService.get('admin'));

  constructor(private adminAuthService:AdminAuthService,private router: Router,private route:ActivatedRoute,private localStorageService:LocalStorageService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        if (this.admin) {
          this.id = params['id'];
          this.adminData = this.admin.admin;
        }
      }
    );
  }

  onSubmit() {
    let data: any= {
      name: this.updateProfileForm.value.name,
      phone: this.updateProfileForm.value.phone,
      address:this.updateProfileForm.value.address,
    }

    this.onUpdateAdmin(data);
    this.updateProfileForm.reset();
  }

  onUpdateAdmin(data:any) {
    this.adminAuthService.UpdateAdminData(data, this.adminData.id).subscribe(responseData => {
      this.adminData = responseData;
      this.admin.admin = responseData;
      this.localStorageService.set('admin', JSON.stringify(this.admin));
      this.router.navigate(['/admin/dashboard/profile', this.id]);
    }, error => {
      console.log(error);
    });


  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
