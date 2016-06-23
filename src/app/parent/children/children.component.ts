import { Component, OnInit } from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { MdButton, MdAnchor } from '@angular2-material/button/button';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card/card';

import { MDL } from '../../lib/mdl/MaterialDesignLiteUpgradeElement';

import { ParentService } from '../../shared';
import { QuestionControlService } from '../../lib/question-control.service';
import { ModalControlService } from '../../lib/modal/modal-control.service';
import { Modal } from '../../lib/enums/modal-names.enums';

import { QuestionBase } from '../../lib/question-base';
import { DropdownQuestion } from '../../lib/question-dropdown';

import { DynamicFormQuestionComponent } from '../../lib/dynamic-form/dynamic-form-question';

@Component({
    selector: 'my-children',
    directives: [MdIcon, MD_CARD_DIRECTIVES,MdButton, MdAnchor, 
        DynamicFormQuestionComponent, MDL ],
    providers: [ParentService, MdIconRegistry, QuestionControlService],
    template: require('./children.component.html'),
    styles: [require('./children.component.scss')]
})
export class ChildrenComponent implements OnInit {
    // menuItems : Array<String> = ["abcd", "bcdef", "efgh"];
    isInstitutionPanelOpen: Boolean = false;
    isManageChildProfileModalOpen: Boolean = false;
    form: ControlGroup;
    modalControlService: ModalControlService;

    institution = {
        name: 'Loyola High School',
        details: ['Pashan Road,', 'Pune 411008']
    };

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

    question: QuestionBase<any> =
    new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
            { key: 'solid', value: 'Solid' },
            { key: 'great', value: 'Great' },
            { key: 'good', value: 'Good' },
            { key: 'unproven', value: 'Unproven' }
        ],
        order: 3
    });

    constructor(private fb: FormBuilder, private parentService: ParentService,
        mdIconRegistry: MdIconRegistry, private qcs: QuestionControlService,
        modalControlService: ModalControlService) {
            this.modalControlService=modalControlService;
    }

    toggleInstitutionDetails() {
        this.isInstitutionPanelOpen = !this.isInstitutionPanelOpen;
        console.log('cliekced', this.isInstitutionPanelOpen);
    }

    ngOnInit() {
        console.log('Children', this.form);
        this.form = this.toControlGroup(this.question);
    }

    toControlGroup(question: QuestionBase<any>) {
        let group = {};
        group[question.key] = question.required ? [question.value || '', Validators.required] : [question.value || ''];
        return this.fb.group(group);
    }

}
