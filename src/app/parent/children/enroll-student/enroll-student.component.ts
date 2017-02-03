import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { CookieService } from 'angular2-cookie/core';

import { ModalControlService } from '../../../lib/modal/modal-control.service';
import { StudentService } from '../../../shared/student.service';
import { EnrollableStudent } from '../../../models/student';
import { getUserEmailFromTokenObject } from '../../../shared/api.service'
const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'enroll-student',
    viewProviders: [MdIconRegistry],
    template: require('./enroll-student.component.html'),
    styles: [require('./enroll-student.component.scss')]
})

export class EnrollStudentComponent implements OnInit {
    @Input() isModalOpen: Boolean;
    private modalControlService: ModalControlService;
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    public races: String[] = ['American Indian', 'Alaskan Native', 'Asian', 'African American',
        'Native Hawaian or Other Pacific Islander', 'American'];
    public genders: String[] = ['Male', 'Female'];
    private months: number[];
    private years: number[];
    private enrollableStudent: EnrollableStudent = new EnrollableStudent();

    private range(a, b, c) {
        c = [];
        while (a--) {
            c[a] = a + b;
        }
        return c;
    };

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService, private studentService: StudentService,
        private cookieService: CookieService
    ) {
        this.modalControlService = modalControlService;
        this.months = this.range(12, 1, this.months);
        console.log('Months: ', this.months);
        this.years = this.range(50, 2016, this.years);
        console.log('Years', this.years);
    }

    ngOnInit() {
        console.log('EnrollStudentComponent');
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
        console.log('Submitted! ');
        this.enrollableStudent.parentEmail = getUserEmailFromTokenObject(this.cookieService);
        this.studentService.enrollStudent(this.enrollableStudent)
            .subscribe((value) => {
                console.log('Success!');
                this.modalControlService.disable();
            }, (err) => {
                console.log('Failure!', err);
            });
    }

    get diagnostic() {
        let self = this;
        // TODO figure out how to set race and gender
        return JSON.stringify(self.enrollableStudent);
    }

}
