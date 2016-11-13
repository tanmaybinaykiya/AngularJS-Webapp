import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'discounts',
    template: require('./discounts.component.html'),
    // styles: [require('./administration.component.scss')],

})
export class DiscountsComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello DiscountsComponent');
    }

}
