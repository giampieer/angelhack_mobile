import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CongratulationsPage} from "../congratulations/congratulations";

/**
 * Generated class for the Reto2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
