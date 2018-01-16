import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the AddItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'add-item',
  templateUrl: 'add-item.html'
})
export class AddItemComponent {

  item = { item: '',amount: '', date: '', message: '' };
	submitted = false;

  constructor() {
    console.log('Hello AddItemComponent Component');
    
  }

  onLogin(form: NgForm) {
    this.submitted = true;
    if (form.valid) {}
  }

}
