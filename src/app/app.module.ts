import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MenuPage } from "../pages/menu/menu";
import { QuestionsPage } from "../pages/questions/questions";
import { WelcomePage } from "../pages/welcome/welcome";
import { ParticipantsPage } from "../pages/participants/participants";
import {ProgressBarModule} from "angular-progress-bar"
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAMH7UpXpRBbf4rhaqBGkmrsRgzHMdfqlI",
  authDomain: "angelhack-b95ff.firebaseapp.com",
  databaseURL: "https://angelhack-b95ff.firebaseio.com",
  projectId: "angelhack-b95ff",
  storageBucket: "angelhack-b95ff.appspot.com",
  messagingSenderId: "189811871900"
};
firebase.initializeApp(config);
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    QuestionsPage,
    WelcomePage,
    ParticipantsPage
  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    MenuPage,
    QuestionsPage,
    WelcomePage,
    ParticipantsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
