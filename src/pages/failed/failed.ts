import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";

@IonicPage()
@Component({
  selector: 'page-failed',
  templateUrl: 'failed.html',
})
export class FailedPage {
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
        this.navCtrl.push(MenuPage);
        console.log('Timer End', e);
      },
      time
    );
  }
  nextPage(){
    this.navCtrl.push(MenuPage);
  }
}
