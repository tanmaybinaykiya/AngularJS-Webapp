import { Component, OnInit, } from '@angular/core';

import { ModalControlService } from './modal-control.service';
import { ModalState } from './modal-state';
import { Modal } from '../enums/modal-names.enums';

@Component({
    selector: 'modal',
    template: require('./modal.component.html'),
    styles: [require('./modal.component.scss')],
})
export class ModalComponent implements OnInit {

    modalState: ModalState = {
        isOpen: false,
        modal: Modal.None
    };

    constructor(private modalControlService: ModalControlService) {
        modalControlService.isOpen$.subscribe(state => {
            console.log('state updated', state);
            this.modalState = state;
        });
    }

    ngOnInit() {
        console.log('Hello ModalComponent');
    }

}
