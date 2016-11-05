import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'forgot-password',
    template: require('./forgot-password.component.html'),
    styles: [require('./forgot-password.component.scss')]
})
export class ForgotPasswordComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        console.log('ForgotPasswordComponent');
    }

    closeView() {
    }

}
