import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'unenroll',
    template: require('./unenroll.component.html'),
    styles: [require('./unenroll.component.scss')]
})
export class UnenrollComponent implements OnInit {

    @Input() isModalOpen: Boolean;

    constructor() {
    }

    ngOnInit() {
        console.log('UnenrollComponent');
    }

}
