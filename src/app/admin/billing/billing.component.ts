import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'billing',
    template: require('./billing.component.html'),
    styles: [require('./billing.component.scss')],

})
export class BillingComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello BillingComponent');
    }

}
