import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from '../../lib/primeng/primeng';

import { SchoolService, StudentService } from '../../service';
import { User, Staff } from '../../models/user';

@Component({
    selector: 'myss-people',
    template: require('./people.component.html'),
    styles: [require('./people.component.scss')],
    providers: [ConfirmationService]
})
export class PeopleComponent implements OnInit {

    people: Staff[];
    selection: Staff[] = [];

    constructor(private confirmationService: ConfirmationService, private schoolService: SchoolService,
        private studentService: StudentService) {
    }

    ngOnInit() {
        console.log('Hello PeopleComponent');
        let self = this;
        self.schoolService.getAllStaffBySchool()
            .subscribe((staff: Staff[]) => {
                self.people = staff;
            });
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

}
