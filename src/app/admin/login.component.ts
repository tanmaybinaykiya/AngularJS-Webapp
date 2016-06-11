import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared';
@Component({
  selector: 'my-admin',
  template: require('./login.component.html'),
  styles: [require('./login.component.scss')]
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
