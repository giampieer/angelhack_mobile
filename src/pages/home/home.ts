import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {DetailbookPage} from "../detailbook/detailbook";
import {SplashPage} from "../splash/splash";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loadProgress: number = 0;
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
  }
  ionViewDidLoad(){
    setInterval(() => {
      if(this.loadProgress < 100){
        this.loadProgress++;
      }
    }, 50);
  }
  nextPage(){
    this.navCtrl.push(SplashPage);
  }
  Alerta() {
    let alert = this.alertCtrl.create({
      title: 'Paco Yunque',
      message: 'Paco Yunque es el título de un cuento o relato corto de tipo infantil, del escritor peruano César Vallejo. Es el más conocido y antologado cuento de dicho autor. Es también el nombre del protagonista infantil del relato, convertido en una de las figuras emblemáticas de la literatura peruana.',
      buttons: [
        {
          text: 'Leer en línea',
          role: 'cancel',
          handler: () => {
            console.log('Leer en línea');
          }
        },
        {
          text: 'Ir a responder',
          handler: () => {
            this.navCtrl.push(DetailbookPage);
          }
        }
      ]
    });
    alert.present();
  }
}
