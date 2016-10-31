import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-superadmin',
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

}
