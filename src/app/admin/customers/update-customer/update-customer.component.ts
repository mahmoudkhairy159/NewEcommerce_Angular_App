import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserData } from 'src/app/Models/userData.model';
import { AdminUsersService } from '../../services/admin-users/admin-users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovingDataThroughRoutesService } from 'src/app/services/MovingDataThroughRoutes.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent {
  user: UserData;
  data: any;
  id: string;
  error: string = null;
  @ViewChild('updateUserForm') updateUserForm: NgForm;

  paramsSubscription: Subscription;
  constructor(private adminUsersService: AdminUsersService, private route: ActivatedRoute, private router: Router, private movingDataThroughRoutesService: MovingDataThroughRoutesService) { }
  ngOnInit() {

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.user = this.movingDataThroughRoutesService.receiveData(params['data']);
      }
    );

  }

  onSubmit() {
    let data: any= {
      name: this.updateUserForm.value.name,
      phone: this.updateUserForm.value.phone,
      address: this.updateUserForm.value.address,

    }
    this.onUpdateUser(data);
    this.updateUserForm.reset();
  }

  onUpdateUser(data:any) {
    this.adminUsersService.updateUser(data, this.id).subscribe(responseData => {
      this.router.navigate(['/admin/dashboard/users/show', this.id]);
    }, error => {
      console.log(error);
    });


  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
