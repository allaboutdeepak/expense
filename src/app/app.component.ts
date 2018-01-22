import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { ReferralPage } from '../pages/referral/referral';
import { ReportPage } from '../pages/report/report';

import { NotificationProvider } from '../providers/notification.service';
import { AnalyticsProvider } from '../providers/google-analytics';
import { CacheService } from "ionic-cache";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ReportPage;

  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
     public statusBar: StatusBar,
     public splashScreen: SplashScreen,
     private notification: NotificationProvider,
     private analytics:AnalyticsProvider,
     private cache: CacheService
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: TabsPage },
      { title: 'Refer', component: ReferralPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
      // Set TTL to 12h
      this.cache.setDefaultTTL(60 * 60 * 12);
      // Keep our cached results when device is offline!
      this.cache.setOfflineInvalidate(false);

      this.notification.pushInit();
      let event={eventCategory:'Launch',eventAction:'start',eventLabel:'app launch',eventValue:'100',renew:true}
      this.analytics.googleAnalyticsTrack('TutorialPage',event);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }


}
