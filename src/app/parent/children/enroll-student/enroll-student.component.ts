import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs/tabs';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { ModalControlService } from '../../../lib/modal/modal-control.service.ts';
import { DropDownComponent } from '../../../lib/custom-dropdown/dropdown.component';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'enroll-student',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor,
        MD_INPUT_DIRECTIVES, MD_TABS_DIRECTIVES, FileSelectDirective,
        FileDropDirective, DropDownComponent],
    providers: [MdIconRegistry],
    template: require('./enroll-student.component.html'),
    styles: [require('./enroll-student.component.scss')]
})

export class EnrollStudentComponent implements OnInit {
    @Input() isModalOpen: Boolean;
    private modalControlService: ModalControlService
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;
    private races: String[] = ['American Indian', 'Alaskan Native', 'Asian', 'African American',
        'Native Hawaian or Other Pacific Islander', 'American'];
    private genders: String[] = ['Male', 'Female'];
    private months: number[];
    private years: number[];

    range(a, b, c) { c = []; while (a--) c[a] = a + b; return c; };

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
