import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'join-today',
    template: require('./join-today.component.html'),
    styles: [require('./join-today.component.scss')]
})
export class JoinTodayComponent implements OnInit {

    constructor() {
        console.log('JoinTodayComponent');
    }

    ngOnInit() {
    }

}
