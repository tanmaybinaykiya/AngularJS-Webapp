import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'manage-user-profile',
    template: require('./manage-user-profile.component.html'),
    styles: [require('./manage-user-profile.component.scss')]
})
export class ManageUserProfileComponent implements OnInit {

    constructor() {
    }

    closeView() {
    }

    ngOnInit() {
        console.log('ManageUserProfileComponent');
    }

}
