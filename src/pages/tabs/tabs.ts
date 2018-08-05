import { Component } from '@angular/core';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {MenuPage} from "../menu/menu";
import {QuestionsPage} from "../questions/questions";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = MenuPage;
  tab3Root = QuestionsPage;
  constructor() {
  }
}
