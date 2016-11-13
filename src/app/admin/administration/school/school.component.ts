import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'school',
    template: require('./school.component.html'),
    // styles: [require('./administration.component.scss')],

})
export class SchoolComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello SchoolComponent');
    }

}
