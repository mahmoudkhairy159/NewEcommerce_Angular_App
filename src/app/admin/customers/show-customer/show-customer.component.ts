import { Subscription } from 'rxjs';
import { Component } from '@angular/core';
import { UserData } from 'src/app/Models/userData.model';
import { AdminUsersService } from '../../services/admin-users/admin-users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovingDataThroughRoutesService } from 'src/app/services/MovingDataThroughRoutes.service';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent {
  user: UserData;
  data: any;
  id: string;
  error: string = null;
  paramsSubscription: Subscription;
  constructor(private adminUsersService: AdminUsersService, private router:Router ,private route:ActivatedRoute,private movingDataThroughRoutesService:MovingDataThroughRoutesService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.onGetUser();
      }
    );

  }

  private onGetUser() {
    this.adminUsersService.getUser(this.id).subscribe(
      responseData => {
        this.user = responseData;
        this.data=this.movingDataThroughRoutesService.sendData(this.user);
      }, error => { this.error = "Error while getting the data" });
  }
  
   public onDeleteUser() {
     this.adminUsersService.deleteUser(this.id);
  }
}
