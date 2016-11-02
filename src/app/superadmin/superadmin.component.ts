import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-ss-superadmin',
    template: require('./superadmin.component.html'),
    styles: [require('./superadmin.component.scss')],
})
export class SuperAdminComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Super Admin');
    }

    createInstitution() {
        console.log('TODO implement this');
    }

    promoteToSuperAdmin() {
        console.log('TODO implement this');
    }

    inviteAdmin() {
        console.log('TODO implement this');
    }


}
