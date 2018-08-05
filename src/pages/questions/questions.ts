import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as firebase from "firebase";
import {ParticipantsPage} from "../participants/participants";
import {WelcomePage} from "../welcome/welcome";
import {MenuPage} from "../menu/menu";

/**
 * Generated class for the QuestionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  cucumber: boolean;
  private db: any;
  messages: any;
  constructor(public navCtrl: NavController) {
    this.db = firebase.firestore();
    this.loadData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }
  updateCucumber() {
    console.log('Cucumbers new state:' + this.cucumber);
  }
  loadData(){
    this.getAllDocuments("preguntas").then((e)=>{
      this.messages = e;
      console.log(this.messages);
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
  nextPage(){
    this.navCtrl.push(MenuPage);
  }

}
