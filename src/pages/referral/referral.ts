import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ReferralPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-referral',
  templateUrl: 'referral.html',
})
export class ReferralPage {

  quotes :any;
  constructor( private socialSharing: SocialSharing ,public navCtrl: NavController) {
  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralPage');
  }
  compilemsg():string{
    var msg = 'share this content' ;
    this.quotes= msg.concat(" \n Sent from my Awesome App !");
    return this.quotes;
  }
  regularShare(){
    var msg = this.compilemsg();
    this.socialSharing.share(msg, null, null, null);
  }
  whatsappShare(){
    var msg  = this.compilemsg();
     this.socialSharing.shareViaWhatsApp(msg, null, null);
   }
   twitterShare(){
    var msg  = this.compilemsg();
    this.socialSharing.shareViaTwitter(msg, null, null);
  }
  facebookShare(){
     var msg  = this.compilemsg();
     this.socialSharing.shareViaFacebook(msg, null, null);
   }
}
