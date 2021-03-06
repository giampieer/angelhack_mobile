import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ParticipantsPage} from "../participants/participants";
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.Time(2000);
  }
  Time(time: number) {
    const start = Date.now();
    let timeOutHandler = setTimeout(
      () => {
        const e = Date.now() - start;
        this.navCtrl.push(ParticipantsPage);
        console.log('Timer End', e);
      },
      time
    );
  }
  nextPage(){
    this.navCtrl.push(ParticipantsPage);
  }
}
