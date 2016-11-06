import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon/icon';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ModalControlService } from '../../../lib/modal/modal-control.service';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'enroll-student',
    viewProviders: [MdIconRegistry],
    templateUrl: './enroll-student.component.html',
    styleUrls: ['./enroll-student.component.scss']
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

    private range(a, b, c) {
        c = [];
        while (a--) {
            c[a] = a + b;
        }
        return c;
    };

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
        this.months = this.range(12, 1, this.months);
        console.log(this.months);
        this.years = this.range(50, 2016, this.years);
        console.log(this.years);
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

}
