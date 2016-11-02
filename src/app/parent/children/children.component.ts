import { Component, OnInit, } from '@angular/core';
// import { ControlGroup, FormBuilder, Validators } from '@angular/common';

import { ParentService, SchoolService, LoginService } from '../../shared';
import { QuestionControlService } from '../../lib/question-control.service';
import { Institution } from '../../models/institution';

import { QuestionBase } from '../../lib/question-base';
import { DropdownQuestion } from '../../lib/question-dropdown';

@Component({
    selector: 'my-children',
    providers: [ParentService, QuestionControlService],
    template: require('./children.component.html'),
    styles: [require('./children.component.scss')]
})
export class ChildrenComponent implements OnInit {

    // form: ControlGroup;
    private isLoading: boolean = true;
    institution: Institution;
    isInstitutionPanelOpen: boolean = false;

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

    constructor(private parentService: ParentService,
        // private fb: FormBuilder, 
        private qcs: QuestionControlService, private loginService: LoginService,
        private schoolService: SchoolService) { }

    ngOnInit() {
        console.log('Children On init', this.schoolService);
        // this.form = this.toControlGroup(this.question);
        let self = this;

        self.isLoading = true;
        let institutionCode = '1234'; // this.loginService.loggedInUser.institutionShortCode;
        // this.schoolService.getSchool(institutionCode)
        //     .subscribe(function(school: Institution) {
        //         console.log('school', school);
        //         self.isLoading = false;
        self.institution = new Institution('shortCode', 'customerId', 'name', 'adminemail',
            'addressline1', 'city', 'state', 12345, 'country'); // school;
        // },
        // function(error) {
        //     console.log(error);
        // });

        // this.schoolService.school.subscribe(function (school: Institution) {
        //     console.log('school', school);
        //     self.isLoading = false;
        //     self.institution = school;
        // }, function (err: any) {
        //     console.log(err);
        // })
    }

    onChanges() {
        console.log('Children ngOnChanges called');
    }

    // toControlGroup(question: QuestionBase<any>) {
    //     let group = {};
    //     group[question.key] = question.required ?
    //         [question.value || '', Validators.required] : [question.value || ''];
    //     return this.fb.group(group);
    // }

    // toggleModal(modal: Modal) {
    //     console.log('Profile: toggleModal', modal);
    //     this.modalControlService.enable(modal);
    // }
}
