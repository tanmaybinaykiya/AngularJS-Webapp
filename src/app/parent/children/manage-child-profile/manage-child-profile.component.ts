import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'manage-child-profile',
    template: require('./manage-child-profile.component.html'),
    styles: [require('./manage-child-profile.component.scss')]
})
export class ManageChildProfileComponent implements OnInit {
    @Input() isModalOpen: Boolean;

    constructor() {
    }

    ngOnInit() {
        console.log('ManageChildProfileComponent');
    }

}
