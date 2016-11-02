import { Component, OnInit } from '@angular/core';

// import { HeaderComponent } from './header';
import { ParentService } from '../shared';
// import { ChildrenComponent } from './children';
// import { ProfileComponent } from './profile';

@Component({
    selector: 'my-ss-parent',
    providers: [ParentService],
    template: require('./parent.component.html'),
    styles: [require('./parent.component.scss')]
})
export class ParentComponent implements OnInit {

    constructor(private parentService: ParentService) {
    }

    ngOnInit() {
        console.log('Hello Parent');
    }

    donate() {
        console.log('Thanks for intending to donate');
    }

}
