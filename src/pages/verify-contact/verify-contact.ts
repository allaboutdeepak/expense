import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AnalyticsProvider } from '../../providers/google-analytics';
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

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public analytics:AnalyticsProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VerifyContactPage');
    let event={eventCategory:'Launch',eventAction:'enter',eventLabel:'VerifyContact',eventValue:'100',renew:true}
    this.analytics.googleAnalyticsTrack('VerifyContactPage',event);
  }

  startApp(){
    this.navCtrl.setRoot(TabsPage).catch((err: any) => {
      console.log(`Didn't set nav root: ${err}`);
    });
  }
}
