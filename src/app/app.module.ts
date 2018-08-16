import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from "../pages/menu/menu";
import { QuestionsPage } from "../pages/questions/questions";
import { WelcomePage } from "../pages/welcome/welcome";
import { ParticipantsPage } from "../pages/participants/participants";
import { Reto1Page } from "../pages/reto1/reto1";
import { Reto2Page } from "../pages/reto2/reto2";
import { Reto3Page } from "../pages/reto3/reto3";
import { CongratulationsPage } from "../pages/congratulations/congratulations";
import { FailedPage } from "../pages/failed/failed";
import { EntryPage} from "../pages/entry/entry";
import { AulaPage } from "../pages/aula/aula";
import { DetailbookPage} from "../pages/detailbook/detailbook";
import { PromedioPage } from "../pages/promedio/promedio";
import {QuestionsbookPage} from "../pages/questionsbook/questionsbook";
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
    HomePage,
    MenuPage,
    QuestionsPage,
    WelcomePage,
    ParticipantsPage,
    Reto1Page,
    Reto2Page,
    Reto3Page,
    CongratulationsPage,
    FailedPage,
    EntryPage,
    AulaPage,
    PromedioPage,
    DetailbookPage,
    QuestionsbookPage

  ],
  imports: [
    BrowserModule,
    ProgressBarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    QuestionsPage,
    WelcomePage,
    ParticipantsPage,
    Reto1Page,
    Reto2Page,
    Reto3Page,
    CongratulationsPage,
    FailedPage,
    EntryPage,
    AulaPage,
    PromedioPage,
    DetailbookPage,
    QuestionsbookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
