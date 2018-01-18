import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics';

@Injectable()

export class AnalyticsProvider {

  constructor(
    private ga: GoogleAnalytics ) {}

  googleAnalyticsTrack(page,event){
    console.log(page,event);
  /*this.ga.startTrackerWithId('UA-112700504-1')
   .then(() => {
     console.log('Google analytics is ready now');
        this.ga.trackView(page);
        console.log('tracker is ready');
        this.ga.trackEvent('Application', 'Launch',event).then((success)=>{
          console.log('trackEvent',success);
        }).catch((err)=>{
          console.log('trackEvent err',err);
        })
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));*/
  }
}
