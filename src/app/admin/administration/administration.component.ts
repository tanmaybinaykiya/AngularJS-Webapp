import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'administration',
    templateUrl: './administration.component.html',
    styleUrls: ['./administration.component.scss'],

})
export class AdministrationComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello AdministrationComponent');
    }

}
