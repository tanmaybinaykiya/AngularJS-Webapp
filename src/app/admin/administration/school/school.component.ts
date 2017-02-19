import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { School, AddSchoolRequest } from '../../../models';
import { SchoolService } from '../../../service';

@Component({
    selector: 'myss-admin-school',
    template: require('./school.component.html'),
    styles: [require('./school.component.scss')],

})
export class SchoolAdministrationComponent implements OnInit {

    newSchooolForm: FormGroup;
    schools: School[];
    selection: School[] = [];
    removeSchoolDialogDisplay: boolean = false;
    addSchoolDialogDisplay: boolean = false;
    createSchool: AddSchoolRequest = new AddSchoolRequest();
    addSchoolStatusMessage: string;

    constructor(private fb: FormBuilder, private schoolService: SchoolService ) {
        // Do stuff

    }

    refreshSchools(){
        this.schoolService.getAllSchools()
        .subscribe((schools: School[]) => {
            this.schools = schools;
        });
    }

    ngOnInit() {
        console.log('Hello SchoolAdministrationComponent');
        this.refreshSchools();
    }

    addSchool() {
        console.log('addSchool');
        this.schoolService.addSchool(this.createSchool)
            .subscribe(() => {
                this.addSchoolStatusMessage = 'School added succesfully';
                this.refreshSchools();
                setTimeout(() => {
                    this.addSchoolDialogDisplay = false;
                    delete this.addSchoolStatusMessage;
                }, 1500);
            }, (err) => {
                console.error('Error adding school', err);
                this.addSchoolStatusMessage = 'School added succesfully';
                setTimeout(() => {
                    this.addSchoolDialogDisplay = false;
                    delete this.addSchoolStatusMessage;
                }, 1500);
            })
    }

}
