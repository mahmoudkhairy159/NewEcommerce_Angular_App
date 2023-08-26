import { Component,Input } from '@angular/core';
import { AdminData } from 'src/app/Models/adminData.model';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent {
  @Input() personalInformation: AdminData;
}
