import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import { AngularFireAuth} from "@angular/fire/auth"
import { FirebaseAuth } from "@angular/fire";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import {BehaviorSubject, Observable, of} from "rxjs";
import { switchMap } from "rxjs/operators";
import {auth} from "firebase";

export interface User {
  uid: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {
    user$: Observable<User>;


  /**
   *
   * @type {boolean}
   */


  constructor(
    private http: HttpClient,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
  ) {
  this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if (user) {
          return this.afs.doc(`user/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
  );
  }

  public loginAction(userData: User) {

  }



  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    };

    return userRef.set(data, {merge: true});
  }

  async googleSignin() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    return this.updateUserData(credential.user);
  }

  async googleSignOut() {
    await this.afAuth.auth.signOut();
  }

  private login(userInfo: User) {
    this.http.post(environment + '/login', userInfo);
  }
}
