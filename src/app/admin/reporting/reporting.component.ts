import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'reporting',
    template: require('./reporting.component.html'),
    // styles: [require('./class.component.scss')],

})
export class ReportingComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello ReportingComponent');
    }

}
