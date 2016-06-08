import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../shared';
@Component({
  selector: 'my-children',
  providers: [ParentService],
  template: require('./children.component.html'),
  styles: [require('./children.component.scss')]
})
export class ChildrenComponent implements OnInit {

  constructor(private loginService: ParentService) {
    // Do stuff
  }

  ngOnInit() {
    console.log('Children');
  }

}
