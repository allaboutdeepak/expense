import { Component } from '@angular/core';
import { NavController, NavParams,Refresher } from 'ionic-angular';
import { AnalyticsProvider } from '../../providers/google-analytics';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LocalNotifications } from '@ionic-native/local-notifications';
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
  toUser : {toUserId: string, toUserName: string};
  constructor(public navCtrl: NavController,
   public navParams: NavParams, public analytics:AnalyticsProvider,
   private socialSharing: SocialSharing,
   private localNotification: LocalNotifications) {
   this.toUser = {
      toUserId:'210000198410281948',
      toUserName:'Hancock'
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
    let event={eventCategory:'Launch',eventAction:'start',eventLabel:'PersonalPage launch',eventValue:'100',renew:true}
    this.analytics.googleAnalyticsTrack('PersonalPage',event);

    this.localNotification.hasPermission().then(
      (permission) => {
        if (permission === true) {
    
          this.localNotification.schedule({
            title: 'The Big Meeting',
            text: '4:15 - 5:15 PM\nBig Conference Room',
            smallIcon: 'res://calendar',
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzfXKe6Yfjr6rCtR6cMPJB8CqMAYWECDtDqH-eMnerHHuXv9egrw'
          });
          
         let notification= this.localNotification.schedule([
            { id: 1, title: 'My first notification' },
            { id: 2, title: 'My second notification' }
           ])

           this.localNotification.on('click', (event, notification, state) => {     
            console.log('click',event);
            console.log(notification);
            console.log(state);
          });

          this.localNotification.on('clear', (event, notification, state) => {     
            console.log('clear',event);
            console.log(notification);
            console.log(state);
          });

          this.localNotification.on('cancel', (event, notification, state) => {     
            console.log('cancel',event);
            console.log(notification);
            console.log(state);
          });
           
        }
      }
    );
  }
  doRefresh(refresher: Refresher){
    console.log('success',refresher);
    refresher.complete();
  }
  openItem(val){
    this.show=val;
    let event={eventCategory:'Transaction',eventAction:'Show',eventLabel:'transaction-'+val,eventValue:'100',renew:true}
    this.analytics.googleAnalyticsTrack('PersonalPage',event);
  }
  shareViaWhatsApp(){
    // Check if sharing via email is supported
      this.socialSharing.shareViaWhatsApp('this simple message').then(() => {
       
        let event={eventCategory:'whatsapp Share',eventAction:'share',eventLabel:'share on whats app',eventValue:'100',renew:true}
        this.analytics.googleAnalyticsTrack('PersonalPage',event);
          console.log('success shard');
      }).catch(() => {
        // Sharing via email is not possible
      });
  }

  shareViaFacebook(){
    // Check if sharing via email is supported
      this.socialSharing.shareViaFacebook('this simple message').then(() => {
       
          console.log('success shard');
      }).catch(() => {
        // Sharing via email is not possible
      });
  }

  shareViaInstagram(){
    // Check if sharing via email is supported
      this.socialSharing.shareViaInstagram('this simple message','assets/user.jpg').then(() => {
       
          console.log('success shard');
      }).catch(() => {
        // Sharing via email is not possible
      });
  }
  shareViaSMS(){
    this.socialSharing.shareViaSMS('this simple message','9990618147').then(() => {
       
      console.log('success shard');
  }).catch(() => {
    // Sharing via email is not possible
  }); 
  }
  
}
