import { Component, OnInit } from '@angular/core';
import { ParentService } from '../../shared';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon/icon';

@Component({
    selector: 'my-children',
    directives: [MdIcon],
    providers: [ParentService, MdIconRegistry],
    template: require('./children.component.html'),
    styles: [require('./children.component.scss')]
})
export class ChildrenComponent implements OnInit {

    institution = {
        name:'Loyola High School',
        
    }

    billingHistory = [
        {
            date: '1/1/16',
            institution: 'DSF Lombard',
            amount: '$123',
            invoiceLink: '/lalala1'
        }, {
            date: '1/2/16',
            institution: 'DSF Lombard',
            amount: '$123',
            invoiceLink: '/lalala2'
        }, {
            date: '3/1/16',
            institution: 'DSF Lombard',
            amount: '$123',
            invoiceLink: '/lalala3'
        }, {
            date: '1/4/16',
            institution: 'DSF Lombard',
            amount: '$123',
            invoiceLink: '/lalala4'
        }
    ];
    enrolledStudents = [
        {
            name: 'Barack Obama',
            class: '1A',
            teacher: 'Putin'
        }, {
            name: 'Manmohan Singh',
            class: '1A',
            teacher: 'Putin'
        }, {
            name: 'Nicolaus Sarcozhy',
            class: '1A',
            teacher: 'Putin'
        }, {
            name: 'Agnela Merkel',
            class: '1A',
            teacher: 'Putin'
        }
    ];
    constructor(private parentService: ParentService, mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('thumb-up', '/icon/assets/thumbup-icon.svg')
            .addSvgIconSetInNamespace('core', '/icon/assets/core-icon-set.svg')
            .registerFontClassAlias('fontawesome', 'fa');
    }

    ngOnInit() {
        console.log('Children');
    }

}
