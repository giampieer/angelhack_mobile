import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {EntryPage} from "../pages/entry/entry";
import {PromedioPage} from "../pages/promedio/promedio";
import {AulaPage} from "../pages/aula/aula";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = EntryPage;
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    statusBar.backgroundColorByHexString("#212121");
    statusBar.styleLightContent();// used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: EntryPage },
      { title: 'Mi Promedio por aula', component: PromedioPage },
      { title: 'Aulas disponibles', component: AulaPage },
      { title: 'Ranking', component: EntryPage }
    ];
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
