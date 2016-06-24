import { Component, OnInit, } from '@angular/core';
import { NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';

import { ModalControlService } from './modal-control.service';
import { ModalState } from './modal-state';
import { Modal } from '../enums/modal-names.enums';

import { EnrollStudentComponent, ManageChildProfileComponent,
    UnenrollComponent, PayTuitionFeesComponent } from '../../parent/children/';

import { AddPaymentTypeComponent, DeletePaymentTypeComponent, DeleteUserComponent,
    InviteFriendsComponent, ManageUserProfileComponent, ProfileComponent,
    ResendInvitationComponent, ResetPasswordComponent } from '../../parent/profile';

import { JoinTodayComponent, ForgotPasswordComponent } from '../../login';

@Component({
    selector: 'modal',
    template: require('./modal.component.html'),
    styles: [require('./modal.component.scss')],
    directives: [NgSwitch, NgSwitchCase, NgSwitchDefault, PayTuitionFeesComponent,
        EnrollStudentComponent, ManageChildProfileComponent, UnenrollComponent,
        AddPaymentTypeComponent, DeletePaymentTypeComponent, DeleteUserComponent,
        InviteFriendsComponent, ManageUserProfileComponent, ProfileComponent,
        ResendInvitationComponent, ResetPasswordComponent, JoinTodayComponent, 
        ForgotPasswordComponent ],
})
export class ModalComponent implements OnInit {

    modalState: ModalState = {
        isOpen: false,
        modal: Modal.None
    };

    constructor(private modalControlService: ModalControlService) {
        console.log(modalControlService);
        modalControlService.isOpen$.subscribe(state => {
            console.log('state updated', state);
            this.modalState = state;
        });
    }

    ngOnInit() {
        console.log('Hello ModalComponent');
    }

}
