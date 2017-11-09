import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthProvider {

  constructor(public angularFireAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
    
  }

}
