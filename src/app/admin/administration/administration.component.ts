import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'administration',
    template: require('./administration.component.html'),
    styles: [require('./administration.component.scss')],

})
export class AdministrationComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello AdministrationComponent');
    }

}
