import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'enrollment-center',
    template: require('./enrollment-center.component.html'),
    styles: [require('./enrollment-center.component.scss')],

})
export class EnrollmentCenterComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello Admin');
    }

}
