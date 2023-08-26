import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { UserData } from 'src/app/Models/userData.model';
import { AdminUsersService } from '../../services/admin-users/admin-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  @ViewChild('createUserForm') createUserForm: NgForm;
  user: UserData;
  userData = {
    name: '',
    email:'',
    phone: '',
    address: '',
    password: '',
    password_confirmation: ''
  };

  constructor(private adminUsersService:AdminUsersService,private router: Router){}


  onSubmit() {

    this.userData.name = this.createUserForm.value.name;
    this.userData.email = this.createUserForm.value.email;
    this.userData.phone = this.createUserForm.value.phone;
    this.userData.address = this.createUserForm.value.address;
    this.userData.password = this.createUserForm.value.password;
    this.userData.password_confirmation = this.createUserForm.value.password_confirmation;
    this.onCreateUser();
    this.createUserForm.reset();
  }



  onCreateUser() {
    this.adminUsersService.createUser(this.userData).subscribe(responseData => {
      this.user = responseData;
      this.router.navigate(['/admin/dashboard/users/show', this.user.id]);
      console.log('  this.UserCreated Successfully');
    }, error => {
      console.error('Error adding User:', error);
    });


  }
}
