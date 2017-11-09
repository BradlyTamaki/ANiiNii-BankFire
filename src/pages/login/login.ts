import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public facebook: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  
  login() {
    console.log('hi');
    this.facebook.login(['email']).then((response) => {
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(response.authResponse.accessToken);

      firebase.auth().signInWithCredential(facebookCredential).then((success) => {
        console.log("Firebase success: " + JSON.stringify(success));
        //this.userProfile = success;
      }).catch((error) => {
        console.log("Firebase failure: " + JSON.stringify(error));
      });
    }).catch((error) => { console.log(error) });
  }
}
