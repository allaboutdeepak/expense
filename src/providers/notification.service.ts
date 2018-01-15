import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
//import 'rxjs/add/operator/map';
import { Events,Platform,ToastController} from 'ionic-angular';
import { Push, PushObject } from '@ionic-native/push'; //, PushOptions
import { Device } from '@ionic-native/device'
@Injectable()
export class NotificationProvider {

  constructor(
    private push: Push,
    private device: Device,
    public platform: Platform,
    public toastCtrl: ToastController,
    public events: Events ) {}

    pushInit(){
        if (!this.platform.is('mobileweb')) {
        var options={}
       if(parseInt(this.device.version) >= 5 && this.platform.is('android')){
         options = {
            android: {
                senderID: 182972841011,
                icon: 'icon',
                iconColor:'#ffffff'
            }
         };
       }else{
         options = {
            android: {
                senderID: 182972841011,
            },
            ios: {
                alert: 'true',
                badge: true,
                sound: 'false'
            }
         };
       }

       const pushObject: PushObject = this.push.init(options);
       pushObject.on('notification').subscribe((data: any) => {
        console.log('notification data:',data);
        /*if (data.additionalData.foreground) {
            this.events.publish('notification',data);
            } 
            else {

                //data.additionalData.coldstart // app closed
                if (data.additionalData.hasOwnProperty("custom_json")) {
                    this.events.publish('notification',data);
                }else{
                    this.events.publish('notification',data);
                }
            }*/
       
         });
         
       pushObject.on('registration').subscribe((registration: any) => {
            console.log('Device registered', registration);
            //this.db.store('fcmDeviceToken', registration.registrationId);
        });
        
      pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
     }  
     }
/*
    saveGcmDeviceId():Promise<any> {
		return new Promise((resolve, reject) => {
            this.auth.getUserData().then((value) => {
                if(value){
                   this.db.retrieve('fcmDeviceToken').then((registrationId)=>{
                        if(registrationId){
                            let gcmDataPost = new FormData();
                            gcmDataPost.append('app_name', this.appconfig.appName);
                            gcmDataPost.append('qustn_api_key', 'vikasarya');
                            gcmDataPost.append('user_id',value.user.id);
                            gcmDataPost.append('gcm_id', registrationId);
                            gcmDataPost.append('app_version', this.appconfig.appversion);
                            gcmDataPost.append('enterprise_id', value.user.eid);
                            gcmDataPost.append('fcm', '1');
                            //this.db.store('gcm_id',registrationId);
                            console.log('stored gcm',registrationId);
                            this.saveGcmDeviceIdToServer(gcmDataPost).subscribe((res) => {
                                console.log("response from saveDeviceId ", res);
                                if (res.status == 'sucess') {
                                    resolve(res);
                                } else {
                                    reject(res);
                                }
                            }, (err) => {
                                reject(err);
                            });
                        }else{
                            reject('No device token found'); 
                        }
                 });
            }else{
                reject('User not loggedin'); 
            }
        });   
     });
    }*/

    /*saveGcmDeviceIdToServer(paramData : any): Observable<any> {
        console.log('third step');
        return this.httpRequestClient.post(this.appconfig.opcontrollerPath+'?c=notification&f=storeGcmId',paramData).map(
            (response) => {
                let data = response.text() ? response.json() : [{}];
                return data;
            }
        );
    }*/
    showToastNotifcation(message){
        const toast = this.toastCtrl.create({
			message: message,
			duration: 2000,
			showCloseButton: true,
			closeButtonText:'Ok',
			dismissOnPageChange: true
		});
		toast.present();
    }
}
