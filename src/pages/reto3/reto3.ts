import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FailedPage} from "../failed/failed";

@Component({
  selector: 'page-reto3',
  templateUrl: 'reto3.html',
})
export class Reto3Page {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Reto3Page');
  }
  nextPage(){
    this.navCtrl.push(FailedPage);
  }
}
