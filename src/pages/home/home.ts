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
      title: 'Fuente Ovejuna',
      message: 'Fuente Ovejuna es un pequeño pueblo labrador, que está bajo el dominio de Fernán Gómez, Comendador Mayor de la orden de Calatrava, un hombre cruel y sin escrúpulos que trata mal y explota a sus vasallos. Entre la gente del pueblo se encuentra Laurencia, quien quiere casarse con Frondoso, un joven de la localidad.',
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
