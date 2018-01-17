import { Component, ViewChild } from '@angular/core';
import { MenuController, NavController, Slides } from 'ionic-angular';
import { VerifyContactPage } from '../verify-contact/verify-contact';
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})

export class TutorialPage {
  showSkip = true;
  applicationName:any=null;
  toturialSlide:any=null;
	@ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public menu: MenuController
  ) { }

  
  startApp(){
    this.navCtrl.setRoot(VerifyContactPage).catch((err: any) => {
      console.log(`Didn't set nav root: ${err}`);
    });
  }

  onSlideChangeStart(slider: Slides) {
    this.showSkip = !slider.isEnd();
  }

	ionViewWillEnter() {
    this.slides.update();
    this.applicationName='hello'
    this.toturialSlide='this is slide content';
	}

  ionViewDidEnter() {
    // the root left menu should be disabled on the tutorial page
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }

}
