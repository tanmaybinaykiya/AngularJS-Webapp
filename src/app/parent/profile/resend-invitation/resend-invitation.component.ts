import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'resend-invitation',
    template: require('./resend-invitation.component.html'),
    styles: [require('./resend-invitation.component.scss')]
})
export class ResendInvitationComponent implements OnInit {

    constructor() {
    }

    closeView() {
    }

    ngOnInit() {
        console.log('ResendInvitationComponent');
    }

}
