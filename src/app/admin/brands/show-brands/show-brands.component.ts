import { MovingDataThroughRoutesService } from './../../../services/MovingDataThroughRoutes.service';
import { Component } from '@angular/core';
import { Brand } from 'src/app/Models/brand.model';
import { AdminBrandsService } from '../../services/admin-brands/admin-brands.service';
import { Pagination } from 'src/app/Models/pagination.model';

@Component({
  selector: 'app-show-brands',
  templateUrl: './show-brands.component.html',
  styleUrls: ['./show-brands.component.css']
})
export class ShowBrandsComponent {
  brands: Brand[];
  pagination: Pagination;
  error: string = null;
  constructor(private adminBrandsService: AdminBrandsService,private movingDataThroughRoutesService:MovingDataThroughRoutesService) { }
  ngOnInit() {
    this.onGetBrands();
  }

  private onGetBrands() {
    this.adminBrandsService.getAllBrands().subscribe(
      responseData => {
        this.brands = responseData.data;
        this.pagination = responseData.pagination;
      }, error => { this.error = "Error while getting the data" });
  }
  sendData(brand: Brand) {
   return this.movingDataThroughRoutesService.sendData(brand);
  }
  public onDeleteBrand(id) {
    this.adminBrandsService.deleteBrand(id);
    this.onGetBrands();
 }
}
