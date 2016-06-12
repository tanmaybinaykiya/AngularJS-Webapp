import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'my-admin',
  template: require('./admin.component.html'),
  styles: [require('./admin.component.scss')]
})
export class AdminComponent implements OnInit {

  constructor() {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Admin');
  }

}
