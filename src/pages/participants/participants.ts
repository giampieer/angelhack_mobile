import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Reto1Page} from "../reto1/reto1";
import {Reto2Page} from "../reto2/reto2";
import {Reto3Page} from "../reto3/reto3";

/**
 * Generated class for the ParticipantsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-participants',
  templateUrl: 'participants.html',
})
export class ParticipantsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParticipantsPage');
  }
  nextPage1(){
    this.navCtrl.push(Reto2Page);
  }
  nextPage2(){
    this.navCtrl.push(Reto3Page);
  }
  nextPage3(){
    this.navCtrl.push(Reto1Page);
  }

}
