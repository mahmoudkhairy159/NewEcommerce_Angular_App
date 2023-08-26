import { Component } from '@angular/core';
import * as Dropzone from 'dropzone';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.css']
})
export class ImageUploadComponent {

  files: File[] = [];
  disabled = false;

  onSelect(event:any) {
    console.log(event);
    if (this.files.length < 6) {
      this.files.push(...event.addedFiles);
    } else {
      this.disabled = true;

    }
  }

  onRemove(event:any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }
}
