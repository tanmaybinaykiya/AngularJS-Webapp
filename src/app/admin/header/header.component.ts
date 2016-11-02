import { Component, OnInit } from '@angular/core';
// import { LoginService, SchoolService } from '../shared';
import { UserBadgeComponent } from './userBadge/user-badge.component';

@Component({
    selector: 'header-toolbar',
    template: require('./header.component.html'),
    styles: [require('./header.component.scss')]
})

export class HeaderComponent implements OnInit {

    constructor(/*private loginService: LoginService, private schoolService: SchoolService*/) {
    }

    notificationMenu() {
        console.log('notificationMenu');
    }
    ngOnInit() {
        console.log('Hello Home');
    }
}
