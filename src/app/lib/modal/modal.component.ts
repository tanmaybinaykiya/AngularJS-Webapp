import { Component, OnInit, } from '@angular/core';
import { NgSwitch, NgSwitchWhen, NgSwitchDefault } from '@angular/common';
import { ModalControlService } from './modal-control.service'
import { ModalState } from './modal-state'
import { PayTuitionFeesComponent } from '../../parent/children/pay-tuition-fees/'
import { EnrollStudentComponent } from '../../parent/children/enroll-student/'
import { ManageChildProfileComponent } from '../../parent/children/manage-child-profile/'
import { UnenrollComponent } from '../../parent/children/unenroll/'
import { Modal } from '../enums/modal-names.enums'

@Component({
    selector: 'modal',
    template: require('./modal.component.html'),
    styles: [require('./modal.component.scss')],
    directives: [NgSwitch, NgSwitchWhen, NgSwitchDefault, PayTuitionFeesComponent, 
        EnrollStudentComponent, ManageChildProfileComponent, UnenrollComponent], 
})

export class ModalComponent implements OnInit {
  
    modalState: ModalState = {
        isOpen:false,
        modal:Modal.None
    };

    constructor(modalControlService: ModalControlService) {
        console.log(modalControlService);
        modalControlService.isOpen$.subscribe(state => {
            console.log('state updated', state);
            this.modalState=state;
        });
    }

    ngOnInit() {
        console.log('Hello ModalComponent');
    }

}
