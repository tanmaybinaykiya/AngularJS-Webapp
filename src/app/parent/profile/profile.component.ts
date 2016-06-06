import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../shared';
@Component({
  selector: 'my-profile',
  providers: [ParentService],
  template: require('./profile.component.html'),
  styles: [require('./profile.component.scss')]
})
export class ProfileComponent implements OnInit {

  constructor(private loginService: ParentService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Hello Home');
  }

}
