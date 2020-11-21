import { Component, OnInit } from '@angular/core';
import { environment } from './../environments/environment';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {ApiCallsService} from "./services/api-calls.service";
import {AuthService} from "./services/auth.service";
import {AngularFireAuth} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'piano-workshop';

  settings;
  published;
  showNav;

  subscriptions = [];
  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private apiCalls: ApiCallsService,
      private afAuth: AngularFireAuth
  ) {
    this.subscriptions.push(this.apiCalls.getSettings().subscribe(
        data => {
          this.published = data.published;
          console.log(this.published);
          if (!this.published) {
              console.log('notpublished');
            this.afAuth.authState.subscribe(
                user => {
                  if (user == null && this.router.url !== '/admin') {
                    this.showNav = false;
                    this.router.navigate(['waiting']);
                  } else {
                    this.showNav = true;
                  }
                }
            );
          }
        }
    ));

  }

  ngOnInit() {


  }
  getSettings() {
  }
}
