import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'general',
    template: require('./general.component.html'),
    // styles: [require('./administration.component.scss')],

})
export class GeneralComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello GeneralComponent');
    }

}
