import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export interface LoginData {
  username: string;
  password: string;
}
export class LoginService {

  /**
   *
   * @type {boolean}
   */
  loggedIn = true;

  constructor(
    private http: HttpClient
  ) {

  }

  public loginAction(userData: LoginData) {

  }

  private login(userInfo: LoginData) {
    this.http.post(environment + '/login', userInfo);
  }
}
