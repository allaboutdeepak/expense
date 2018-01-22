import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { Network } from '@ionic-native/network';
import { Push } from '@ionic-native/push';
import { Device } from '@ionic-native/device'
import { HttpClientModule } from "@angular/common/http";
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { CacheModule } from 'ionic-cache';
import { HttpModule } from '@angular/http';
/* native ends */
import { PersonalPage } from '../pages/personal/personal';
import { GroupsPage } from '../pages/groups/groups';
import { ReportPage } from '../pages/report/report';
import { EarningPage } from '../pages/earning/earning';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { VerifyContactPage } from '../pages/verify-contact/verify-contact';
import { ReferralPage } from '../pages/referral/referral';
/* pages ends*/
import { AddItemComponent } from '../components/add-item/add-item';
import { AddGroupMemberComponent } from '../components/add-group-member/add-group-member';
import { GroupsComponent } from '../components/groups/groups';
/* component ends*/
import { NetworkInfoProvider } from '../providers/network-info';
import { NotificationProvider } from '../providers/notification.service';
import { EmojiProvider } from '../providers/emoji';
import { AnalyticsProvider } from '../providers/google-analytics';
/* providers ends*/

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,PersonalPage,GroupsPage,ReportPage,EarningPage,TutorialPage,VerifyContactPage,ReferralPage,
    AddItemComponent,AddGroupMemberComponent,GroupsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    //IonicModule.forRoot(MyApp)
    IonicModule.forRoot(MyApp,{
      tabsHideOnSubPages:true,
      tabsLayout:'icon-left',
      preloadModules: true,
      clickBlock: false
    }),
    CacheModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,PersonalPage,GroupsPage,ReportPage,EarningPage,TutorialPage,VerifyContactPage,ReferralPage,
    AddItemComponent,AddGroupMemberComponent,GroupsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleAnalytics,
    NetworkInfoProvider,NotificationProvider,Push,Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmojiProvider,
    AnalyticsProvider,
    SocialSharing,
    LocalNotifications
  ]
})
export class AppModule {}
