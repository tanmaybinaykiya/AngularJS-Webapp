import { Component, OnInit } from '@angular/core';

import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';

@Component({
    selector: 'my-superadmin',
    template: require('./superadmin.component.html'),
    styles: [require('./superadmin.component.scss')],
    directives: [...MD_BUTTON_DIRECTIVES, ...MD_INPUT_DIRECTIVES, MD_CARD_DIRECTIVES],
})
export class SuperAdminComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Super Admin');
    }

}
