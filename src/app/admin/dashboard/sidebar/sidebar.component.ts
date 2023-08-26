import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  showCustomersDropdown: boolean = false;
  showBrandsDropdown: boolean = false; 
  showProductsDropdown: boolean = false;
  showOrdersDropdown: boolean = false;

  toggleCustomersDropdown() {
    this.showCustomersDropdown = !this.showCustomersDropdown;
  }
 
  toggleBrandsDropdown() {
    this.showBrandsDropdown = !this.showBrandsDropdown;
  }
  toggleProductsDropdown() {
    this.showProductsDropdown = !this.showProductsDropdown;
  }
  toggleOrdersDropdown() {
    this.showOrdersDropdown = !this.showOrdersDropdown;
  }
  }
