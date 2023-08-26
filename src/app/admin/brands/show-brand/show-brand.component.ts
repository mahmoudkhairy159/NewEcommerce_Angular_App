import { Component } from '@angular/core';
import { Brand } from 'src/app/Models/brand.model';
import { AdminBrandsService } from '../../services/admin-brands/admin-brands.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovingDataThroughRoutesService } from 'src/app/services/MovingDataThroughRoutes.service';

@Component({
  selector: 'app-show-brand',
  templateUrl: './show-brand.component.html',
  styleUrls: ['./show-brand.component.css']
})
export class ShowBrandComponent {
  brand: Brand;
  data: any;
  id: string;
  error: string = null;
  paramsSubscription: Subscription;
  constructor(private adminBrandsService: AdminBrandsService, private router:Router ,private route:ActivatedRoute,private movingDataThroughRoutesService:MovingDataThroughRoutesService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.onGetBrand();
      }
    );

  }

  private onGetBrand() {
    this.adminBrandsService.getBrand(this.id).subscribe(
      responseData => {
        this.brand = responseData;
        this.data=this.movingDataThroughRoutesService.sendData(this.brand);
      }, error => { this.error = "Error while getting the data" });
  }
   public onDeleteBrand() {
     this.adminBrandsService.deleteBrand(this.id);
  }
}
