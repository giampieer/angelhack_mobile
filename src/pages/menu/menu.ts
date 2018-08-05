import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  loadProgress: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad(){
    setInterval(() => {
      if(this.loadProgress < 50){
        this.loadProgress++;
      }
    }, 50);
  }
}
