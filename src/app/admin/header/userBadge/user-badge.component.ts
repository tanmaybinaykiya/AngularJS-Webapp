import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-badge',
    template: require('./user-badge.component.html'),
    styles: [require('./user-badge.component.scss')]
})

export class UserBadgeComponent implements OnInit {
    user = 'Dr. House';
    role = 'Admin';
    constructor() {
    }

    ngOnInit() {
        console.log('Hello UserBadgeComponent');
    }
}

