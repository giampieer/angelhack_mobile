import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {WelcomePage} from "../welcome/welcome";
import {CongratulationsPage} from "../congratulations/congratulations";

/**
 * Generated class for the Reto1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
