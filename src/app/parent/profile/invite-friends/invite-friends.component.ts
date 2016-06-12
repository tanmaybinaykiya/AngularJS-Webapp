import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';
import { MdSlideToggle } from '@angular2-material/slide-toggle/slide-toggle';

@Component({
    selector: 'invite-friends',
    directives: [MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES, MdSlideToggle],
    providers: [MdIconRegistry],
    template: require('./invite-friends.component.html'),
    styles: [require('./invite-friends.component.scss')]
})
export class InviteFriendsComponent implements OnInit {

    @Input() isModalOpen: Boolean;

    constructor(mdIconRegistry: MdIconRegistry) {
    }

    ngOnInit() {
        console.log('InviteFriendsComponent');
    }

    toggleView() {
        this.isModalOpen = !this.isModalOpen;
    }

}
