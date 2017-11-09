import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Facebook } from '@ionic-native/facebook';
import * as firebase from 'firebase';

import { ToastController } from 'ionic-angular';

@Injectable()
export class AuthProvider {
  private currentUserData: any = null;

  constructor(public angularFireAuth: AngularFireAuth, public toastCtrl: ToastController, public facebook: Facebook) { }

  set currentUser(data) {
    this.currentUserData = data;
  }

  get currentUser() {
    return this.currentUserData;
  }

  login() {
    return this.facebook.login(['email']).then((response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

      return this.angularFireAuth.auth.signInWithCredential(facebookCredential).then((res) => {
        console.log("Firebase success: " + JSON.stringify(res));

        let toast = this.toastCtrl.create({
          message: 'Successfully logged in',
          duration: 3000
        });
        toast.present();
        this.currentUserData = res;
      }).catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
      });
    }).catch((error) => { console.log(error) });
  }

  logout() {
    return this.angularFireAuth.auth.signOut().then((res) => {
      console.log('Successfully logged out.', res);
      this.currentUser = null;
      
      let toast = this.toastCtrl.create({
        message: 'Successfully logged out',
        duration: 3000
      });
      toast.present();
    });
  }
}
