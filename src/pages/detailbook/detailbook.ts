import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuestionsbookPage} from "../questionsbook/questionsbook";
import {SplashPage} from "../splash/splash";

/**
 * Generated class for the DetailbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-detailbook',
  templateUrl: 'detailbook.html',
})
export class DetailbookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailbookPage');
  }
  nextPage(){
    this.navCtrl.push(QuestionsbookPage);
  }
  nextPage2(){
    this.navCtrl.push(SplashPage);
  }

}
