import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs/tabs';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

@Component({
    selector: 'enroll-student',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor,
        MD_INPUT_DIRECTIVES, MD_TABS_DIRECTIVES, FileSelectDirective,
        FileDropDirective],
    providers: [MdIconRegistry],
    template: require('./enroll-student.component.html'),
    styles: [require('./enroll-student.component.scss')]
})

export class EnrollStudentComponent implements OnInit {
    @Input() isModalOpen: Boolean;
    public uploader: FileUploader = new FileUploader({ url: URL });
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    constructor(mdIconRegistry: MdIconRegistry) {
    }

    ngOnInit() {
        console.log('EnrollStudentComponent');
    }

    toggleView() {
        this.isModalOpen = !this.isModalOpen;
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

}
