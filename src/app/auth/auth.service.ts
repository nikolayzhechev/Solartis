import { Injectable,  NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import * as auth from 'firebase/auth';
import { Router } from '@angular/router';
import { User } from '../shared/Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData: any;

  constructor(
    public afs: AngularFirestore,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone // needed?
  ) {
      this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user')!);
      } else {
        localStorage.setItem('user', 'null');
        JSON.parse(localStorage.getItem('user')!);
      }
    });
   }

   SignIn(email: string, password: string) {
    return this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.SetUserData(res.user);
        this.afAuth.authState.subscribe((user) => {
          if (user) {
            this.router.navigate(['dashboard']);
          }
        });
      })
      .catch((error) => {
        console.log(error);
        // error hanlding
      });
   }

   SignUp(email: string, password: string) {
    return this.afAuth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      this.SetUserData(res.user);
    })
    .catch((error) => {
      console.log(error);
      // error hanlding
    });
   }

   SetUserData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc( // <<<<<<<<< check this
      `users/${user.username}`
    );
    
    const userData: User = {
      username: user.username,
      email: user.email,
      emailVerified: user.email
    };

    return userRef.set(userData, { // <<<<<<<<< check this
      merge: true,
    });
   }

   SignOut() {
    return this.afAuth.signOut()
      .then(() => {
        localStorage.removeItem('user');
        this.router.navigate(['']);
      });
   }

   GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider()).then((res: any) => { // < sign in with google needed?
      this.router.navigate(['dashboard']);
    });
  }

  AuthLogin(provider: any) { // < handle auth?
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.router.navigate(['dashboard']);
        this.SetUserData(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
