import { Component } from '@angular/core';

@Component({
  selector: 'app-show-customers',
  templateUrl: './show-customers.component.html',
  styleUrls: ['./show-customers.component.css']
})
export class ShowCustomersComponent {
  "customers" = [
    {
      "id":1,
      "name": "Mahmoud Khairy",
      "email": "user@gmail.com",
      "phone": "01117507344",
      "address": "Giza"
    },
    {
      "id":2,
      "name": "Mahmoud Khairy",
      "email": "user@gmail.com",
      "phone": "01117507344",
      "address": "Giza"
    },
    {
      "id":3,
      "name": "Mahmoud Khairy",
      "email": "user@gmail.com",
      "phone": "01117507344",
      "address": "Giza"
    }
   ];
}
