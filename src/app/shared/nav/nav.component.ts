import {Component, OnDestroy} from '@angular/core';
import {EditingService} from '../../services/editing.service';
import {LoginService} from "../../services/login.service";
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnDestroy {

  editMode;

  menuOpen = false;
  subscriptions = [];
  constructor(
      private editService: EditingService,
      public loginService: LoginService,
      public afAuth: AngularFireAuth
  ) {
    this.subscriptions.push(this.editService.editMode.subscribe( data => {
      this.editMode = data;
    }));
  }

  ngOnDestroy() {
    this.subscriptions.map(sub => {
      sub.unsubscribe();
    });
  }

  toggleEditMode() {
    this.editService.editMode.next(!this.editMode);
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}

