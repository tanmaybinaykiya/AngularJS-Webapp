import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Institution } from '../../../models/institution';
import { SchoolService } from '../../../shared/api.service';

@Component({
    selector: 'myss-admin-school',
    template: require('./school.component.html'),
    styles: [require('./school.component.scss')],

})
export class SchoolAdministrationComponent implements OnInit {

    newSchooolForm: FormGroup;
    schools: Institution[];
    selection: Institution[] = [];
    removeSchoolDialogDisplay: boolean = false;
    addSchoolDialogDisplay: boolean = false;

    constructor(fb: FormBuilder, schoolService: SchoolService) {
        // Do stuff
        schoolService.getAllSchools().subscribe((schools: Institution[]) => {
            this.schools = schools;
        });
    }

    ngOnInit() {
        console.log('Hello SchoolAdministrationComponent');
    }

}
