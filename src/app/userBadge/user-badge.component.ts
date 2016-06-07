import { Component, OnInit } from '@angular/core';
import { LoginService, NotificationService } from '../shared';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
    selector: 'user-badge',
    directives: [...MD_TOOLBAR_DIRECTIVES],
    providers: [LoginService, NotificationService],
    template: require('./user-badge.component.html'),
    // styles: [require('./header.component.scss')]
})

export class UserBadge implements OnInit {
    user='Tanmay';
    role='Parent';
    constructor(private loginService: LoginService, private notificationService: NotificationService) {
    }

    ngOnInit() {
        console.log('Hello Home');
    }
}