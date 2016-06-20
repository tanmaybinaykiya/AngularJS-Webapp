import { Component, OnInit } from '@angular/core';
import {ModalControlService} from './modal-control.service'

@Component({
    selector: 'modal',
    template: require('./modal.component.html'),
    providers: [ModalControlService],
    styles: [require('./modal.component.scss')],
})

export class ModalComponent implements OnInit {
    private isOpen:Boolean;
    private modalControlService:ModalControlService;
    
    constructor(_modalControlService: ModalControlService) {
        // this.isOpen = this.modalControlService.isOpen();
        this.modalControlService = _modalControlService;
    }

    fetchState(){
        this.isOpen = this.modalControlService.isOpen();
    }

    ngOnInit() {
        console.log('Hello ModalComponent');
        this.fetchState();
    }
}
