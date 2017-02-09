import { Component, OnInit } from '@angular/core';
import { SchoolService, StudentService } from '../../service';
import { EnrolledStudent } from '../../models';

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

    constructor(private schoolService: SchoolService, private studentService: StudentService) {
        // Do stuff
        let self = this;
        this.studentService.getEnrolledStudentsForAdmin()
            .subscribe(function (students: EnrolledStudent[]) {
                console.log('students:', students);
                self.enrollmentList = students.map(student =>
                    (new EnrollmentListView(student.firstName + ' ' + student.lastName, student.enrollmentInfo.state)));
                // self.isLoading = false;
                // self.institution = school;
            },
            function (error) {
                console.log(error);
            });


        // [
        //     new EnrollmentListView('tanmay1', 'PENDING_REVIEW'),
        //     new EnrollmentListView('tanmay2', 'PENDING_REVIEW'),
        //     new EnrollmentListView('tanmay3', 'PENDING_REVIEW'),
        //     new EnrollmentListView('tanmay4', 'PENDING_REVIEW')
        // ];

        this.assignableClasses = [
            new AssignableClassesView('1A', '1A (Full)'),
            new AssignableClassesView('2B', '1A (2/20)')
        ];

        this.statuses = [
            new EnrollmentStateView('PENDING_REVIEW'),
            new EnrollmentStateView('PENDING_REVIEW'),
            new EnrollmentStateView('PENDING_REVIEW')];
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
    constructor(
        private name: string,
        private reason: EnrollmentState) {
    }

}

class AssignableClassesView {
    constructor(private value: string,
        private label: string) {
    }
}

type EnrollmentState = 'PENDING_REVIEW' | 'WAITLIST' | 'IN_PROCESS' | 'REGISTERED';

class EnrollmentStateView {
    private value: string;
    constructor(private label: EnrollmentState) {
        this.value = label;
    }
}
