import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { ModalControlService } from '../../lib/modal/modal-control.service.ts';

@Component({
    selector: 'forgot-password',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES],
    providers: [MdIconRegistry],
    template: require('./forgot-password.component.html'),
    styles: [require('./forgot-password.component.scss')]
})
export class ForgotPasswordComponent implements OnInit {
    constructor(mdIconRegistry: MdIconRegistry, private modalControlService: ModalControlService) {
    }

    ngOnInit() {
        console.log('ForgotPasswordComponent');
    }

    closeView() {
        this.modalControlService.disable();
    }

}
