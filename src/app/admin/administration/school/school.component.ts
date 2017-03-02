import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';

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

    constructor(private fb: FormBuilder, private schoolService: SchoolService, private cookieService: CookieService) {
        // Do stuff

    }

    refreshSchools(setCookie: boolean) {
        let self = this;
        this.schoolService.getAllSchools()
            .subscribe((schools: School[]) => {
                this.schools = schools;
                if (setCookie) {
                    let currentUser: any = self.cookieService.getObject('loggedInUser');
                    currentUser.schools = {
                        isSelectedIndex: 0,
                        availableSchools: schools
                    };
                    self.cookieService.putObject('loggedInUser', currentUser);
                    let updatedCurrentUser: any = self.cookieService.getObject('loggedInUser');
                    console.log('updatedCurrentUser: ', updatedCurrentUser);

                }
            });
    }

    ngOnInit() {
        console.log('Hello SchoolAdministrationComponent');
        this.refreshSchools(false);
    }

    addSchool() {
        console.log('addSchool');
        this.schoolService.addSchool(this.createSchool)
            .subscribe(() => {
                this.addSchoolStatusMessage = 'School added succesfully';
                this.refreshSchools(this.schools.length === 0);
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
