import { Component, OnInit } from '@angular/core';
import { SchoolService } from '../../shared/api.service';

@Component({
    selector: 'enrollment-center',
    template: require('./enrollment-center.component.html'),
    styles: [require('./enrollment-center.component.scss')],

})
export class EnrollmentCenterComponent implements OnInit {

    private enrollmentList: EnrollmentListView[];
    private assignableClasses: AssignableClassesView[];
    private statuses: EnrollmentStateView[];
    private selectedClass: AssignableClassesView;
    private selectedStatus: EnrollmentStateView;
    private selection: EnrollmentListView[];

    constructor(private schoolService: SchoolService) {
        // Do stuff
        this.enrollmentList = [
            new EnrollmentListView('1', 'tanmay1', 'Class Full'),
            new EnrollmentListView('2', 'tanmay2', 'Pending Review'),
            new EnrollmentListView('3', 'tanmay3', 'In Progress'),
            new EnrollmentListView('4', 'tanmay4', 'Class Full')
        ];

        this.assignableClasses = [
            new AssignableClassesView('1A', '1A (Full)'),
            new AssignableClassesView('2B', '1A (2/20)')
        ];

        this.statuses = [
            new EnrollmentStateView('Class Full'),
            new EnrollmentStateView('Pending Review'),
            new EnrollmentStateView('In Progress')];
    }

    delete() {
        console.log('Delete: ', this.selection);
    }

    commitModify() {
        console.log('Modify: ', this.selection);
    }

    ngOnInit() {
        console.log('Hello EnrollmentCenterComponent');
    }

}

class EnrollmentListView {
    constructor(private id: string,
        private name: string,
        private reason: EnrollmentState) {
    }

}

class AssignableClassesView {
    constructor(private value: string,
        private label: string) {
    }
}

type EnrollmentState = 'Class Full' | 'Pending Review' | 'In Progress';

class EnrollmentStateView {
    private value: string;
    constructor(private label: EnrollmentState) {
        this.value = label;
    }
}
