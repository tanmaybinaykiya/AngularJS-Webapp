import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'people',
    template: require('./people.component.html'),
    styles: [require('./people.component.scss')],
})
export class PeopleComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello PeopleComponent');
    }

}
