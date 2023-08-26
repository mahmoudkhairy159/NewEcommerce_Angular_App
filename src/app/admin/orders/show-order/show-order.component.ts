import { Component } from '@angular/core';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent {
  customer = {
    "name": "Mahmoud Khairy",
    "email": "user@gmail.com",
    "phone": "01117507344",
    "address": "Giza"
  }
}
