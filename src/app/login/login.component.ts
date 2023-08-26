import { NgForm } from '@angular/forms';
import { AdminAuthService } from '../admin/services/admin-auth/admin-auth.service';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  @ViewChild('loginForm') loginForm: NgForm;
credentials = { email: '', password: '' };
  constructor(private adminAuthService: AdminAuthService) {}

  onSubmit() {

    this.credentials.email = this.loginForm.value.email;
    this.credentials.password = this.loginForm.value.password;
    this.onLogin(this.credentials);
    this.loginForm.reset();
  }

  onLogin(credentials: {
    email: string,
    password: string
  }) {
    this.adminAuthService.login(credentials);
  }


}
