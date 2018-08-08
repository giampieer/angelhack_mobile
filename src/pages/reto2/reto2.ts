import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CongratulationsPage} from "../congratulations/congratulations";
@Component({
  selector: 'page-reto2',
  templateUrl: 'reto2.html',
})
export class Reto2Page {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Reto2Page');
  }
  nextPage(){
    this.navCtrl.push(CongratulationsPage);
  }
}
