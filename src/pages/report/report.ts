import { Http } from '@angular/http';
import { CacheService } from 'ionic-cache';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  films: Observable<any>;
  filmsKey = 'my-films-group';
  tap=null;
  constructor(public navCtrl: NavController, private http: Http, private cache : CacheService, private toastCtrl: ToastController) { }
 

  // Load either from API or Cache
  loadFilms(refresher?) {
    let url = 'http://swapi.co/api/films/';
    let req = this.http.get(url)
      .map(res => {
        let toast = this.toastCtrl.create({
          message: 'New data from API loaded',
          duration: 2000
        });
        toast.present();
 
        return res.json().results;
      });
 
    // Specify custom TTL if you want
    let ttl = 15;
 
    if (refresher) {
      // Reload data even if it is cached
      let delayType = 'all';
      this.films = this.cache.loadFromDelayedObservable(url, req, this.filmsKey, ttl, delayType);
 
      // Hide the refresher once loading is done
      this.films.subscribe(data => {
        refresher.complete();
      });
    } else {
      // Load with Group key and custom TTL
      this.films = this.cache.loadFromObservable(url, req, this.filmsKey, ttl);
 
      // Or just load without additional settings
      // this.films = this.cache.loadFromObservable(url, req);
    }
  }
 
  // Invalidate for a specific group key
  invalidateCache() {
    this.cache.clearGroup(this.filmsKey);
  }
 
  // Pull to refresh and force reload
  forceReload(refresher) {
    this.loadFilms(refresher);
  }

  tapEvent(event){
		this.tap=event.tapCount
		if(event.tapCount<=1){
			console.log(event.tapCount);
			console.log(event);
			this.loadFilms();
		}
  }
}
