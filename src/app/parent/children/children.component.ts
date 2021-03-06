import { Component, OnInit } from '@angular/core';
import { /*ControlGroup, */FormBuilder, Validators } from '@angular/forms';
import { MdIconRegistry } from '@angular2-material/icon';
import { CookieService } from 'angular2-cookie/core';

import { ParentService, SchoolService, BillingService, StudentService, InstitutionService } from '../../service';
import { QuestionControlService } from '../../lib/question-control.service';
import { ModalControlService } from '../../lib/modal/modal-control.service';
import { Modal } from '../../lib/enums/modal-names.enums';
import { School, Institution, EnrolledStudent, PaymentMethodResponse } from '../../models';

import { QuestionBase } from '../../lib/question-base';
import { DropdownQuestion } from '../../lib/question-dropdown';

@Component({
    selector: 'myss-children',
    viewProviders: [MdIconRegistry],
    template: require('./children.component.html'),
    styles: [require('./children.component.scss')]
})
export class ChildrenComponent implements OnInit {

    form: any; // ControlGroup;

    institution: Institution;
    school: School;
    isLoading: boolean = false;
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

    private enrolledStudents: {
        name: string,
        class: string,
        teacher: string
    }[];

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
        private mdIconRegistry: MdIconRegistry, private qcs: QuestionControlService,
        private modalControlService: ModalControlService, private schoolService: SchoolService,
        private cookieService: CookieService, private studentService: StudentService,
        private institutionService: InstitutionService, private billingService: BillingService) { }

    ngOnInit() {
        console.log('Children Oninit');
        this.form = this.toControlGroup(this.question);
        let self = this;

        self.isLoading = true;
        let currentUser: any = this.cookieService.getObject('loggedInUser');
        let institutionCode = currentUser.institutionShortCode;
        let schoolCode = currentUser.schoolCode;
        this.schoolService.getSchoolsByInstitutionAndSchoolCode(institutionCode, schoolCode)
            .subscribe((school: School) => {
                console.log('school', school);
                self.isLoading = false;
                self.school = school;
            },
            (error) => {
                console.log(error);
            });

        self.isLoading = true;
        this.institutionService.getInstitutionByCode(institutionCode).subscribe((institution: Institution) => {
            self.isLoading = false;
            self.institution = institution;
        }, (err) => {
            console.log('Error getting Institution:', err);
        });

        self.isLoading = true;
        this.studentService.getEnrolledStudentsForParent()
            .subscribe(function (students: EnrolledStudent[]) {
                console.log('students:', students);
                self.enrolledStudents = students.map(student => ({
                    name: student.firstName + ' ' + student.lastName,
                    class: 'Enrollment Confirmation Pending',
                    teacher: 'Enrollment Confirmation Pending',
                }));
                self.isLoading = false;
            },
            function (error) {
                console.log(error);
            });


    }

    OnChanges() {
        console.log('Children ngOnChanges called');
    }

    toControlGroup(question: QuestionBase<any>) {
        let group = {};
        group[question.key] = question.required ?
            [question.value || '', Validators.required] : [question.value || ''];
        return this.fb.group(group);
    }

    toggleModal(modal: Modal) {
        console.log('Profile: toggleModal', modal);
        this.modalControlService.enable(modal);
    }

}
