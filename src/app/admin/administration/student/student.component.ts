import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'student',
    template: require('./student.component.html'),
    // styles: [require('./administration.component.scss')],

})
export class StudentComponent implements OnInit {

    constructor() {
        // Do stuff
    }

    ngOnInit() {
        console.log('Hello StudentComponent');
    }

}
