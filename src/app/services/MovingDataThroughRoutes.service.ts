import { Injectable } from "@angular/core";

@Injectable({providedIn:'root'})
export class MovingDataThroughRoutesService {

  sendData( data:any) {
    return JSON.stringify(data);
  }
  receiveData(data: any) {

    return JSON.parse(data);
  }
}
