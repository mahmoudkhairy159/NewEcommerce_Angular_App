import { Component } from '@angular/core';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})
export class ShowOrdersComponent {
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers', // or 'simple' for basic pagination
      pageLength: 10 // Number of rows per page
      // Add more DataTables options as needed
    };
  }
}
