import { Component,Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminData } from 'src/app/Models/adminData.model';
import { UserData } from 'src/app/Models/userData.model';
import { AdminUsersService } from 'src/app/admin/services/admin-users/admin-users.service';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  user: UserData;
  id: string;
  error: string = null;
  paramsSubscription: Subscription;
  constructor(private adminUsersService: AdminUsersService, private router:Router ,private route:ActivatedRoute) { }
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
      }, error => { this.error = "Error while getting the data" });
  }
}
