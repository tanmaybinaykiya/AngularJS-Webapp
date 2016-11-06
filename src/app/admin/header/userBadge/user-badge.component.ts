/// <reference path="../../../../_all.d.ts" />
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'user-badge',
    templateUrl: './user-badge.component.html',
    styleUrls: ['./user-badge.component.scss']
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
