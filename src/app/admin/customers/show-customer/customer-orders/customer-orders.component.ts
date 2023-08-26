import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-orders',
  templateUrl: './customer-orders.component.html',
  styleUrls: ['./customer-orders.component.css']
})
export class CustomerOrdersComponent {
  orders: any[] = [
    {
      status : 'done',
      payment_method:'visa',
      payment_status : 'pending',
      delivery_date : '25-8-2022',
      transaction_id : 1,
      totalCost:100,
    }
  ];

  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers', // or 'simple' for basic pagination
      pageLength: 10 // Number of rows per page
      // Add more DataTables options as needed
    };
  }


}
