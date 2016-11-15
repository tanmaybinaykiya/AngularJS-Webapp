import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../../lib/primeng/primeng';

import { User } from '../../models/user';

@Component({
    selector: 'myss-people',
    template: require('./people.component.html'),
    styles: [require('./people.component.scss')],
    providers: [ConfirmationService]
})
export class PeopleComponent implements OnInit {

    people: User[];
    selection: User[] = [];

    constructor(private confirmationService: ConfirmationService) {
        // Do stuff
        this.people = [
            new User(1, 'tanmay1', 'Admin', '12434tgrfvc', 'ISS2'),
            new User(2, 'tanmay2', 'Admin', '12434tgrfvc', 'ISS3'),
            new User(3, 'tanmay3', 'Admin', '12434tgrfvc', 'ISS1'),
            new User(4, 'tanmay4', 'Staff', '12434tgrfvc', 'ISS4')
        ];
    }

    ngOnInit() {
        console.log('Hello PeopleComponent');
    }

    modify() {
        console.log('Modify: ', this.selection);
    }

    delete() {
        console.log('Delete: ', this.selection);
        this.confirmationService.confirm({
            message: 'Are you sure to delete the selected items?'
        });
    }

    get diagnostic() {
        return JSON.stringify(this.selection.map(person => person.id));
    }

}
