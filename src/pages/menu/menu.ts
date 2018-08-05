import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

      if(this.loadProgress < 100){
        this.loadProgress++;
      }

    }, 50);

  }

}
