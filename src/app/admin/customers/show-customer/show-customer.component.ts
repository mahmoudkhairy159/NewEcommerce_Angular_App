import { Component } from '@angular/core';

@Component({
  selector: 'app-show-customer',
  templateUrl: './show-customer.component.html',
  styleUrls: ['./show-customer.component.css']
})
export class ShowCustomerComponent {
  customer = {
      "name": "Mahmoud Khairy",
      "email": "user@gmail.com",
      "phone": "01117507344",
      "address": "Giza"
    }
}
