import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models';
import { SchoolService } from '../../../service';

@Component({
    selector: 'staff',
    template: require('./staff.component.html'),
    styles: [require('./staff.component.scss')],

})
export class StaffComponent implements OnInit {

    private staff: Staff[];
    private selectedStaff: Staff;

    constructor(private schoolService: SchoolService) {
    }

    ngOnInit() {
        console.log('Hello StaffComponent');
        this.schoolService.getAllStaffBySchool()
            .subscribe((staff: Staff[]) => {
                this.staff = staff;
            });
    }

    modifyStaff() {
        console.log('Modifying staff: ', this.selectedStaff);
    }

    deleteStaff() {
        console.log('Deleting staff: ', this.selectedStaff);
    }

    addStaff() {
        console.log('Add staff: ');
    }

}
