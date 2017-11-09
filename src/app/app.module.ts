import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import * as firebase from 'firebase/app';
import { AngularFireModule } from 'angularfire2';
import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuth } from 'angularfire2/auth'
import { AuthProvider } from '../providers/auth/auth';

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDsh_jb0r-KwZbGdAwQ7MYvmDKVKBMJKao",
  authDomain: "aniinii-bank.firebaseapp.com",
  databaseURL: "https://aniinii-bank.firebaseio.com",
  projectId: "aniinii-bank",
  storageBucket: "aniinii-bank.appspot.com",
  messagingSenderId: "758193744087"
}

firebase.initializeApp(FIREBASE_CONFIG);
  
@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth,
    Facebook
  ]
})
export class AppModule {}
