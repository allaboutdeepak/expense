import { Component } from '@angular/core';
import { NavController, NavParams,Refresher } from 'ionic-angular';

/**
 * Generated class for the PersonalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  show=0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }
  doRefresh(refresher: Refresher){
    console.log('success',refresher);
    refresher.complete();
  }
  openItem(val){
    this.show=val;
  }
}
