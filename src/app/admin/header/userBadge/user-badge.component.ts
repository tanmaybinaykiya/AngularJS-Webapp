import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-header-user-badge',
    template: require('./user-badge.component.html'),
    styles: [require('./user-badge.component.scss')]
})
export class AdminHeaderUserBadgeComponent implements OnInit {
    user = 'Dr. House';
    role = 'Admin';
    constructor() {
    }

    ngOnInit() {
        console.log('Hello UserBadgeComponent');
    }
}
