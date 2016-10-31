import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-ss-reset-password',
    template: require('./reset-password.component.html'),
    styles: [require('./reset-password.component.scss')]
})
export class ResetPasswordComponent implements OnInit {

    constructor() {
    }

    closeView() {
        console.log('close Modal');
    }

    ngOnInit() {
        console.log('ResetPasswordComponent');
    }

}
