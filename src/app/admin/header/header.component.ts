import { Component, OnInit } from '@angular/core';
// import { LoginService, SchoolService } from '../shared';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { UserBadgeComponent } from './userBadge/user-badge.component';
@Component({
    selector: 'header-toolbar',
    directives: [...MD_TOOLBAR_DIRECTIVES, UserBadgeComponent],
    // providers: [LoginService, SchoolService],
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
