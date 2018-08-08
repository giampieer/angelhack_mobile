import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CongratulationsPage} from "../congratulations/congratulations";
@Component({
  selector: 'page-reto1',
  templateUrl: 'reto1.html',
})
export class Reto1Page {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Reto1Page');
  }
  nextPage(){
    this.navCtrl.push(CongratulationsPage);
  }
}
