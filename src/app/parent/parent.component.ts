import { Component, OnInit } from '@angular/core';

import { ParentService } from '../shared';

@Component({
    selector: 'my-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

    constructor(private parentService: ParentService) {
    }

    ngOnInit() {
        console.log('Hello Parent');
    }

    donate() {
        console.log('Thanks for intending to donate');
    }

}
