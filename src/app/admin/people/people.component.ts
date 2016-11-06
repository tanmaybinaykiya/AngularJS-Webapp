import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello PeopleComponent');
    }

}
