import { Subscription } from 'rxjs';
import { Component, Input, ViewChild } from '@angular/core';
import { Brand } from 'src/app/Models/brand.model';
import { AdminBrandsService } from '../../services/admin-brands/admin-brands.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { MovingDataThroughRoutesService } from 'src/app/services/MovingDataThroughRoutes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-brand',
  templateUrl: './update-brand.component.html',
  styleUrls: ['./update-brand.component.css']
})
export class UpdateBrandComponent {
  brand: Brand;
  data: any;
  id: string;
  error: string = null;
  @ViewChild('updateBrandForm') updateBrandForm: NgForm;

  paramsSubscription: Subscription;
  constructor(private adminBrandsService: AdminBrandsService, private route:ActivatedRoute,private router:Router,private movingDataThroughRoutesService:MovingDataThroughRoutesService) { }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.brand = this.movingDataThroughRoutesService.receiveData(params['data']);
      }
    );

  }

  onSubmit() {
    let data: any= {
      name_ar: this.updateBrandForm.value.name_ar,
      name_en: this.updateBrandForm.value.name_en,
      category: this.updateBrandForm.value.category,
      type: this.updateBrandForm.value.type,
      photo:null,
    }
    this.onUpdateBrand(data);
    this.updateBrandForm.reset();
  }

  onUpdateBrand(data:any) {
    this.adminBrandsService.updateBrand(data, this.id).subscribe(responseData => {
      this.router.navigate(['/admin/dashboard/brands/show', this.id]);
    }, error => {
      console.log(error);
    });


  }
  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

}
