import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { Push } from '@ionic-native/push';
import { Device } from '@ionic-native/device'
/* native ends */
import { PersonalPage } from '../pages/personal/personal';
import { GroupsPage } from '../pages/groups/groups';
import { ReportPage } from '../pages/report/report';
import { EarningPage } from '../pages/earning/earning';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
/* pages ends*/
import { AddItemComponent } from '../components/add-item/add-item';
/* component ends*/
import { NetworkInfoProvider } from '../providers/network-info';
import { NotificationProvider } from '../providers/notification.service';
/* providers ends*/
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,PersonalPage,GroupsPage,ReportPage,EarningPage,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,PersonalPage,GroupsPage,ReportPage,EarningPage,
    AddItemComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NetworkInfoProvider,NotificationProvider,Push,Device,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
