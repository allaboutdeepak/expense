import { Component } from '@angular/core';

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

  text: string;

  constructor() {
    console.log('Hello AddItemComponent Component');
    this.text = 'Hello World';
  }

}
