import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ParticipantsPage} from "../participants/participants";
import {MenuPage} from "../menu/menu";

/**
 * Generated class for the CongratulationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
