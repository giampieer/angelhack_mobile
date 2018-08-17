import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {QuestionsPage} from "../questions/questions";
import {SplashPage} from "../splash/splash";

/**
 * Generated class for the QuestionsbookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-questionsbook',
  templateUrl: 'questionsbook.html',
})
export class QuestionsbookPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsbookPage');
  }
  nextPage(){
    this.navCtrl.push(QuestionsPage);
  }
  nextPage2(){
    this.navCtrl.push(SplashPage);
  }
}
