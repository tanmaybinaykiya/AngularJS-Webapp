import { Component, OnInit, Input } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input/input';

@Component({
    selector: 'manage-user-profile',
    directives: [ MdIcon, MD_CARD_DIRECTIVES, MdButton, MdAnchor, MD_INPUT_DIRECTIVES ],
    providers: [ MdIconRegistry ],
    template: require('./manage-user-profile.component.html'),
    styles: [ require('./manage-user-profile.component.scss') ]
})
export class ManageUserProfileComponent implements OnInit {

    @Input() isModalOpen: Boolean;

    constructor(mdIconRegistry: MdIconRegistry) {
    }

    ngOnInit() {
        console.log('ManageUserProfileComponent');
    }
    
    toggleView(){
        this.isModalOpen = !this.isModalOpen;
    }

}
