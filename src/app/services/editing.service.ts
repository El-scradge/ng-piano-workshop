import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ApiCallsService} from "./api-calls.service";

@Injectable({
  providedIn: 'root'
})
export class EditingService {

  private EDIT_MODE = new BehaviorSubject<boolean>(false);


  constructor(
      private apiCalls: ApiCallsService
  ) {
  }

  get editMode() {
    return this.EDIT_MODE;
  }

  set editMode(value) {
    this.EDIT_MODE.next(!this.EDIT_MODE.value);
  }

  getPublished() {
    return this.apiCalls.getSettings();
  }
}

