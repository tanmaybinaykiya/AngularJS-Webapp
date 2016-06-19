import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';

@Component({
    selector: 'resend-invitation',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES],
    providers: [MdIconRegistry],
    template: require('./resend-invitation.component.html'),
    styles: [require('./resend-invitation.component.scss')]
})
export class ResendInvitationComponent implements OnInit {

    @Input() isModalOpen: Boolean;

    constructor(mdIconRegistry: MdIconRegistry) {
    }

    ngOnInit() {
        console.log('ResendInvitationComponent');
    }

    toggleView() {
        this.isModalOpen = !this.isModalOpen;
    }

}
