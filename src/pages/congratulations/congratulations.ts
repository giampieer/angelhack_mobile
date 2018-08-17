import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {SplashPage} from "../splash/splash";
@Component({
  selector: 'page-congratulations',
  templateUrl: 'congratulations.html',
})
export class CongratulationsPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.Time(7000);
  }
  Time(time: number) {
    const start = Date.now();
    let timeOutHandler = setTimeout(
      () => {
        const e = Date.now() - start;
        this.navCtrl.push(SplashPage);
        console.log('Timer End', e);
      },
      time
    );
  }
  nextPage(){
    this.navCtrl.push(MenuPage);
  }
}
