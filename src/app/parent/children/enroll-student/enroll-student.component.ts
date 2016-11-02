import { Component, OnInit, Input } from '@angular/core';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'enroll-student',
    template: require('./enroll-student.component.html'),
    styles: [require('./enroll-student.component.scss')]
})

export class EnrollStudentComponent implements OnInit {
    @Input() isModalOpen: Boolean;
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    private races: String[] = ['American Indian', 'Alaskan Native', 'Asian', 'African American',
        'Native Hawaian or Other Pacific Islander', 'American'];
    private genders: String[] = ['Male', 'Female'];
    private months: number[];
    private years: number[];

    range(a, b, c) { c = []; while (a--) c[a] = a + b; return c; };

    constructor() {
        this.months = this.range(12, 1, this.months);
        console.log(this.months);
        this.years = this.range(50, 2016, this.years);
        console.log(this.years);
    }

    ngOnInit() {
        console.log('EnrollStudentComponent');
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

}
