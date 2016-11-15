import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'page-not-found',
    template: require('./page-not-found.component.html'),
    // styles: [require('./class.component.scss')],

})
export class PageNotFoundComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello PageNotFoundComponent');
    }

}
