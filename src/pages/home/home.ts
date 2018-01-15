import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { AddItemComponent } from '../../components/add-item/add-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tab1 = ContactPage;
  tab2 = AboutPage;
  tab3 = AddItemComponent;
  constructor(public navCtrl: NavController) {

  }

}
