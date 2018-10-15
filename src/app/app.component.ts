import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {SplashPage} from "../pages/splash/splash";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = SplashPage;
  pages: Array<{title: string, component: any}>;
  constructor(public platform: Platform,public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.statusBar.overlaysWebView(true);
    statusBar.backgroundColorByHexString("#212121");
    this.pages = [
      { title: 'Planes Lectores', component: SplashPage },
      { title: 'Ranking', component: SplashPage },
      { title: 'Desempeño', component: SplashPage }
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
