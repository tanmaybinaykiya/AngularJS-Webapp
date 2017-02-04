import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { CookieService } from 'angular2-cookie/core';

import { ModalControlService } from '../../../lib/modal/modal-control.service';
import { StudentService, getUserEmailFromTokenObject } from '../../../service';
import { EnrollableStudent } from '../../../models/student';
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
    private enrollableStudent: EnrollableStudent = new EnrollableStudent();

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService, private studentService: StudentService,
        private cookieService: CookieService
    ) {
        this.modalControlService = modalControlService;
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
