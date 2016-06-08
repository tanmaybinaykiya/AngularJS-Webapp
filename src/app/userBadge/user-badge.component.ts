import { Component, OnInit } from '@angular/core';
import { LoginService, NotificationService } from '../shared';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
    selector: 'user-badge',
    directives: [...MD_TOOLBAR_DIRECTIVES],
    providers: [LoginService, NotificationService],
    template: require('./user-badge.component.html'),
    styles: [require('./user-badge.component.scss')]
})

export class UserBadgeComponent implements OnInit {
    user = 'Dr. Gregory House';
    role = 'Parent';
    constructor(private loginService: LoginService, private notificationService: NotificationService) {
    }

    ngOnInit() {
        console.log('Hello Home');
    }
}
