import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActionSheetController } from 'ionic-angular';
/**
 * Generated class for the AddGroupMemberComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-group-member',
  templateUrl: 'add-group-member.html'
})
export class AddGroupMemberComponent {

  item = { item: '',amount: '', date: '', message: '' };
	submitted = false;

  constructor(public actionSheetCtrl: ActionSheetController) {
    console.log('Hello AddGroupMemberComponent Component');
    
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {}
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Open Gallery',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Capture Icon',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
