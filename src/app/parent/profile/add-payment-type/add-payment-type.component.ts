import { Component, OnInit, Input, Directive } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs/tabs';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { ModalControlService } from '../../../lib/modal/modal-control.service.ts';

@Component({
    selector: 'add-payment-type',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton,
        MdAnchor, MD_INPUT_DIRECTIVES, MD_TABS_DIRECTIVES],
    providers: [MdIconRegistry],
    template: require('./add-payment-type.component.html'),
    styles: [require('./add-payment-type.component.scss')]
})

export class AddPaymentTypeComponent implements OnInit {

    modalControlService: ModalControlService;

    constructor(mdIconRegistry: MdIconRegistry, modalControlService: ModalControlService) {
        this.modalControlService = modalControlService;
    }

    closeView() {
        this.modalControlService.disable();
    }

    ngOnInit() {
        console.log('AddPaymentTypeComponent');
    }


}
