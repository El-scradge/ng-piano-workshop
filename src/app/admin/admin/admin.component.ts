import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoginService} from '../../services/login.service';
import {EditingService} from '../../services/editing.service';
import {auth} from 'firebase/app';
import {ApiCallsService} from "../../services/api-calls.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  settings;
  subscriptions = [];
  constructor(
      public afAuth: AngularFireAuth,
      private loginService: LoginService,
      private editingService: EditingService,
      private apiCalls: ApiCallsService
  ) {
    this.subscriptions.push(this.apiCalls.getSettings().subscribe(
        data => {
            console.log('settings:' , data);
          this.settings = data;
        }
    ));
  }

  ngOnInit() {
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

  publish() {
    this.apiCalls.setPublished().subscribe(
        response => {
          console.log(response);
        },
        errors => {
          console.log(errors);
        }
    );
  }
  unPublish() {
    this.apiCalls.setUnPublished().subscribe(
        response => {
          console.log(response);
        },
        errors => {
          console.log(errors);
        }
    );
  }
}
