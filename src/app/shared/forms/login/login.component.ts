import { Component, OnInit } from '@angular/core';
import {LoginData, LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onLoginAction(formData) {
    const userData = formData.form.value;
    this.loginService.loginAction(userData);
  }

}
