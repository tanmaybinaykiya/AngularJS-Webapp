import { Component, OnInit } from '@angular/core';
import { Staff } from '../../../models';
import { InstitutionService } from '../../../service';

@Component({
    selector: 'staff',
    template: require('./staff.component.html'),
    styles: [require('./staff.component.scss')],

})
export class StaffComponent implements OnInit {

    private staff: Staff[];
    private selectedStaff: Staff;

    constructor(institutionService: InstitutionService) {
        institutionService.getAllStaff().subscribe((staff: Staff[]) => {
            this.staff = staff;
        });
    }

    ngOnInit() {
        console.log('Hello StaffComponent');
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
