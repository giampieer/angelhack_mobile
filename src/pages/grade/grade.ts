import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {EntryPage} from "../entry/entry";

@Component({
  selector: 'page-grade',
  templateUrl: 'grade.html',
})
export class GradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GradePage');
  }
  nextPage(){
    this.navCtrl.push(EntryPage);
  }
}
