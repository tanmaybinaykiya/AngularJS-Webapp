import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-superadmin',
    templateUrl: './superadmin.component.html',
    styleUrls: ['./superadmin.component.scss']
})
export class SuperAdminComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Super Admin');
    }

}
