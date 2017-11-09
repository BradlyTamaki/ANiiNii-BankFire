import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

@Injectable()
export class AuthProvider {

  constructor(public angularFireAuth: AngularFireAuth, private toastCtrl: ToastController) {
    console.log('Hello AuthProvider Provider');

    
    
  }

}
