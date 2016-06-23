import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { ModalControlService } from '../../../lib/modal/modal-control.service.ts';

@Component({
    selector: 'unenroll',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES],
    providers: [MdIconRegistry],
    template: require('./unenroll.component.html'),
    styles: [require('./unenroll.component.scss')]
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
