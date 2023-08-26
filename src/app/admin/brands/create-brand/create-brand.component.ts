import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AdminBrandsService } from '../../services/admin-brands/admin-brands.service';
import { Router } from '@angular/router';
import { Brand } from 'src/app/Models/brand.model';

@Component({
  selector: 'app-create-brand',
  templateUrl: './create-brand.component.html',
  styleUrls: ['./create-brand.component.css']
})
export class CreateBrandComponent {
  @ViewChild('createBrandForm') createBrandForm: NgForm;
  brand: Brand;
  brandData = {
    name_ar: '',
    "name_en":'',
    "category": '',
    "type": '',
    "photo": ''
  };

  constructor(private adminBrandsService:AdminBrandsService,private router: Router){}


  onSubmit() {

    this.brandData.name_ar = this.createBrandForm.value.name_ar;
    this.brandData.name_en = this.createBrandForm.value.name_en;
    this.brandData.category = this.createBrandForm.value.category;
    this.brandData.type = this.createBrandForm.value.type;
    this.brandData.photo = this.createBrandForm.value.photo;
    this.onCreateBrand();
    this.createBrandForm.reset();
  }



  onCreateBrand() {
    this.adminBrandsService.createBrand(this.brandData).subscribe(responseData => {
      this.brand = responseData;
      this.router.navigate(['/admin/dashboard/brands/show', this.brand.id]);
      console.log('  this.brandCreated Successfully');
    }, error => {
      console.error('Error adding brand:', error);

    });


  }

}
