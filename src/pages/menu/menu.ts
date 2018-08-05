import { Component } from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import * as firebase from "firebase";
import {QuestionsPage} from "../questions/questions";
import {WelcomePage} from "../welcome/welcome";
@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  loadProgress: number = 0;
  private db: any;
  messages: any;
  constructor(public navCtrl: NavController) {
    this.db = firebase.firestore();
    this.loadData();
  }
  ionViewDidLoad(){
    setInterval(() => {
      if(this.loadProgress < 50){
        this.loadProgress++;
      }
    }, 50);
  }
  loadData(){
    this.getAllDocuments("libros").then((e)=>{
      this.messages = e;
    });
  }
  getAllDocuments(collection: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.collection(collection)
        .get()
        .then((querySnapshot) => {
          let arr = [];
          querySnapshot.forEach(function (doc) {
            var obj = JSON.parse(JSON.stringify(doc.data()));
            obj.$key = doc.id
            console.log(obj)
            arr.push(obj);
          });
          if (arr.length > 0) {
            console.log("Document data:", arr);
            resolve(arr);
          } else {
            console.log("No such document!");
            resolve(null);
          }
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
  nextPage1(){
    this.navCtrl.push(QuestionsPage);
  }
  nextPage2(){
    this.navCtrl.push(WelcomePage);
  }
}
