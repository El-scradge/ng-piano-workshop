import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditingService {

  private EDIT_MODE = new BehaviorSubject<boolean>(true);
  constructor() { }

  get editMode() {
    return this.EDIT_MODE;
  }

  set editMode(value) {
    this.EDIT_MODE.next(!this.EDIT_MODE.value);
  }
}

