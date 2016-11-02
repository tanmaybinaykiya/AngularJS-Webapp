import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'invite-friends',
    template: require('./invite-friends.component.html'),
    styles: [require('./invite-friends.component.scss')]
})
export class InviteFriendsComponent implements OnInit {

    constructor() {
    }

    closeView() {
    }

    ngOnInit() {
        console.log('InviteFriendsComponent');
    }

}
