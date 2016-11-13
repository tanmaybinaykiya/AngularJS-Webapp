import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'class',
    template: require('./class.component.html'),
    // styles: [require('./class.component.scss')],

})
export class ClassComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello ClassComponent');
    }

}
