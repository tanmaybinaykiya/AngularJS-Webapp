import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'staff',
    template: require('./staff.component.html'),
    // styles: [require('./administration.component.scss')],

})
export class StaffComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello StaffComponent');
    }

}
