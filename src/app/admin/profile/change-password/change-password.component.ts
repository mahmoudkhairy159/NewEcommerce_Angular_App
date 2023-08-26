import { AdminData } from 'src/app/Models/adminData.model';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminAuthService } from '../../services/admin-auth/admin-auth.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  @ViewChild('changePasswordForm') changePasswordForm: NgForm;
  adminData: AdminData;
  paramsSubscription: Subscription;
  id: string;
  admin = JSON.parse(this.localStorageService.get('admin'));

  constructor(private route: ActivatedRoute,  private adminAuthService:AdminAuthService,private localStorageService: LocalStorageService
  ) { }
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
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  onSubmit() {
    let data: any = {
      currentPassword: this.changePasswordForm.value.currentPassword,
      newPassword: this.changePasswordForm.value.newPassword,
      newPassword_confirmation:this.changePasswordForm.value.newPassword_confirmation,

    }
    console.log(data);
    this.onChangePassword(data);
    this.adminAuthService.logout();
    this.changePasswordForm.reset();
  }
  onChangePassword(data: any) {
    this.adminAuthService.changePassword(data, this.adminData.id).subscribe(responseData => {
      console.log(responseData);
    }, error => {
      console.log(error);
    });
  }
}
