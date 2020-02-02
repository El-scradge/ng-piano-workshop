import { Injectable } from '@angular/core';
import {ApiCallsService} from "./api-calls.service";

@Injectable({
  providedIn: 'root'
})
export class TitleServiceService {

  constructor(
      private apiCalls: ApiCallsService
  ) { }

  getTile() {
    return this.apiCalls.getData({type: 'title'});
  }

  saveTitle(data) {
    if (data.id) {
      this.apiCalls.updateData(data).subscribe(
          response => {
            console.log('saved data ', data);
          },
          errors => { console.log(errors); }
      );
    } else {
      this.apiCalls.setData(data).subscribe(
          response => {
            console.log('saved data ', data);
          },
          errors => { console.log(errors); }
      );
    }
  }
}
