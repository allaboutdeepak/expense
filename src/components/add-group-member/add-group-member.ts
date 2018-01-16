import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor() {
    console.log('Hello AddGroupMemberComponent Component');
    
  }
  
  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {}
  }

}
