import { Component, OnInit, Input } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

import { ModalControlService } from '../../../lib/modal/modal-control.service';

@Component({
    selector: 'unenroll',
    viewProviders: [MdIconRegistry],
    templateUrl: './unenroll.component.html',
    styleUrls: ['./unenroll.component.scss']
})
export class UnenrollComponent implements OnInit {

    private modalControlService: ModalControlService;

    @Input() isModalOpen: Boolean;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    ngOnInit() {
        console.log('UnenrollComponent');
    }

    closeView() {
        this.modalControlService.disable();
    }

}
