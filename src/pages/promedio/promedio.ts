import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-promedio',
  templateUrl: 'promedio.html',
})
export class PromedioPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PromedioPage');
  }
}
