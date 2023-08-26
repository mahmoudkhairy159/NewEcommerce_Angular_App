import { Component } from '@angular/core';
import { Pagination } from 'src/app/Models/pagination.model';
import { UserData } from 'src/app/Models/userData.model';
import { AdminUsersService } from '../../services/admin-users/admin-users.service';
import { MovingDataThroughRoutesService } from 'src/app/services/MovingDataThroughRoutes.service';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent {

  users: UserData[];
  pagination: Pagination;
  error: string = null;
  constructor(private adminUsersService: AdminUsersService,private movingDataThroughRoutesService:MovingDataThroughRoutesService) { }
  ngOnInit() {
    this.onGetUsers();
  }

  private onGetUsers() {
    this.adminUsersService.getAllUsers().subscribe(
      responseData => {
        this.users = responseData['data'];
        this.pagination = responseData['pagination'];
      }, error => { this.error = "Error while getting the data" });
  }
  sendData(user: UserData) {
   return this.movingDataThroughRoutesService.sendData(user);
  }
  public onDeleteBrand(id) {
    this.adminUsersService.deleteUser(id);
    this.onGetUsers();
 }
}
