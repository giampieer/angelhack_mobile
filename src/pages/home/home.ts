import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loadProgress: number = 0;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){
    setInterval(() => {
      if(this.loadProgress < 100){
        this.loadProgress++;
      }
    }, 50);
  }
  nextPage(){
    this.navCtrl.push(MenuPage);
  }
}
