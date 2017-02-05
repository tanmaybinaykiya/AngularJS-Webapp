import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { CookieService } from 'angular2-cookie/core';

import { ModalControlService } from '../../../lib/modal/modal-control.service';
import { StudentService, BillingService, getUserEmailFromTokenObject } from '../../../service';
import { EnrollableStudent, PaymentMethodResponse } from '../../../models';
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'enroll-student',
    viewProviders: [MdIconRegistry],
    template: require('./enroll-student.component.html'),
    styles: [require('./enroll-student.component.scss')]
})

export class EnrollStudentComponent implements OnInit {

    @Input() isModalOpen: Boolean;
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    public races: String[] = ['American Indian', 'Alaskan Native', 'Asian', 'African American',
        'Native Hawaian or Other Pacific Islander', 'American'];
    public genders: String[] = ['Male', 'Female'];
    private enrollableStudent: EnrollableStudent = new EnrollableStudent();
    public defaultPaymentMethod: PaymentMethodResponse;

    constructor(mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService, private studentService: StudentService,
        private cookieService: CookieService, private billingService: BillingService) {
    }

    ngOnInit() {
        console.log('EnrollStudentComponent');
        let parentEmail: string = getUserEmailFromTokenObject(this.cookieService);
        let self = this;
        this.billingService.getDefaultPaymentMethod(parentEmail)
            .subscribe((paymentMethods: PaymentMethodResponse[]) => {
                self.defaultPaymentMethod = paymentMethods[0];
            }, err => {
                console.log('Error getting paymentMethods');
            });
    }

    closeView() {
        this.modalControlService.disable();
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

    submit() {
        let self = this;
        console.log('Submitted! ');
        this.enrollableStudent.parentEmail = getUserEmailFromTokenObject(this.cookieService);
        this.enrollableStudent.paymentMethodId = this.defaultPaymentMethod.methodId;
        console.log('Submitted! :', self.enrollableStudent);
        this.studentService.enrollStudent(self.enrollableStudent)
            .subscribe((value) => {
                console.log('Success!');
                this.modalControlService.disable();
            }, (err) => {
                console.log('Failure!', err);
            });
    }

    setRace(race) {
        this.enrollableStudent.race = race;
    }

    setGender(gender) {
        this.enrollableStudent.gender = gender;
    }

    get diagnostic() {
        return JSON.stringify(this.enrollableStudent);
    }

}
