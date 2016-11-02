import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../shared';

@Component({
    selector: 'user-badge',
    template: require('./user-badge.component.html'),
    styles: [require('./user-badge.component.scss')]
})

export class UserBadgeComponent implements OnInit {
    user = 'Dr. House';
    role = 'Parent';
    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
        console.log('Hello Home');
        this.user=this.loginService.loggedInUser.name;
        this.role=this.loginService.loggedInUser.role;
    }
}

