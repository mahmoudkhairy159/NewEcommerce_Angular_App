import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminData } from 'src/app/Models/adminData.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  
  adminData: AdminData;
  id: string;
  admin = JSON.parse(this.localStorageService.get('admin'));
  paramsSubscription: Subscription;
  constructor(private localStorageService:LocalStorageService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.adminData = this.admin.admin;
      }
    );
  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
