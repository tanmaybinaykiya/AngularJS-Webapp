import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'delete-user',
    template: require('./delete-user.component.html'),
    styles: [require('./delete-user.component.scss')]
})
export class DeleteUserComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('DeleteUserComponent');
    }

}
