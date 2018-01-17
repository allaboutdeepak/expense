import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the VerifyContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-verify-contact',
  templateUrl: 'verify-contact.html',
})
export class VerifyContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyContactPage');
  }

  startApp(){
    this.navCtrl.setRoot(TabsPage).catch((err: any) => {
      console.log(`Didn't set nav root: ${err}`);
    });
  }
}
