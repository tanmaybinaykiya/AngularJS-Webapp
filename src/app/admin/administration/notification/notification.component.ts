import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'notification',
    template: require('./notification.component.html'),
    styles: [require('./notification.component.scss')],
})
export class AdminNotificationComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello AdminNotificationComponent');
    }

}
