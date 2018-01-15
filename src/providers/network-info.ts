import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Platform,Events } from 'ionic-angular';
import { Network } from '@ionic-native/network';
import { Subscription} from 'rxjs/Subscription';


@Injectable()
export class NetworkInfoProvider {
  connected: Subscription;
	disconnected: Subscription;
	currentPlatform:any=null;
	constructor(
		 private network: Network,
		 public events: Events,
		 public platform: Platform
		) {
			platform.ready().then(() => {
				if (this.platform.is('mobileweb')) {
					this.currentPlatform='mobileweb';
							console.log("running in a browser on mobile desktop!");
				}else if (this.platform.is('mobile') && this.platform.is('android')) {
						console.log("running on Android device!");
						this.currentPlatform='android';
				}else if (this.platform.is('mobile') && this.platform.is('ios')) {
							console.log("running on iOS device!");
							this.currentPlatform='ios';
				}else if (this.platform.is('mobile') && this.platform.is('windows')) {
							console.log("running on windows device!");
							this.currentPlatform='windows';
			}else{
							console.log('unknown device');
							this.currentPlatform='unknown';
				}
			});
 		 }

	init(): Promise<any>{
			return new Promise((resolve) => {
				this.connected = this.network.onConnect().subscribe(data => {
					this.events.publish('networkchange',data.type);
					}, error => console.error(error));
					this.disconnected = this.network.onDisconnect().subscribe(data => {
						this.events.publish('networkchange',data.type);
					}, error => console.error(error));
					
				this.events.subscribe('networkchange', (data) => {
					//console.log('network change:',data);
					resolve(data);
					});
			});	 
		}
	/**
	 * check for the internet connectivity
	 * return true if connected else retiurn false
	 */
	isOnline(){
		
		if(this.currentPlatform==='android' || this.currentPlatform==='ios' || this.currentPlatform==='windows'){
			if(this.network.type==='none' || this.network.type==='unknown'){
				this.events.publish('networkchange','offline');
				return false;
				}
			else{
				this.events.publish('networkchange','online'); return true;
			}
		}else{
			// desktop
			this.events.publish('networkchange','online');return true;
			//this.events.publish('networkchange','offline'); return false;
		}
	}
}
