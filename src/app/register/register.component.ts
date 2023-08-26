import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminAuthService } from '../admin/services/admin-auth/admin-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm: NgForm;
  adminData = {
    name: '',
    email: '',
    address: '',
    phone: '',
    password: '',
    password_confirmation: ''
  };
  constructor(private adminAuthService: AdminAuthService) { }

  onSubmit() {

    this.adminData.email = this.registerForm.value.email;
    this.adminData.name = this.registerForm.value.name;
    this.adminData.phone = this.registerForm.value.phone;
    this.adminData.address = this.registerForm.value.address;
    this.adminData.password = this.registerForm.value.password;
    this.adminData.password_confirmation = this.registerForm.value.password_confirmation;
    this.onRegister(this.adminData);
    this.registerForm.reset();
  }

  onRegister(adminData :{
    name: string,
    email: string,
    address: string,
    phone: string,
    password: string,
    password_confirmation:string,
  }) {
    this.adminAuthService.register(adminData);
  }

}
