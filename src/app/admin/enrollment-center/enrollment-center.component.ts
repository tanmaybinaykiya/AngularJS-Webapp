import { Component, OnInit } from '@angular/core';
import { SchoolService, StudentService } from '../../service';
import { EnrolledStudent, Class, EnrollmentState } from '../../models';
import { format } from 'util';

@Component({
    selector: 'enrollment-center',
    template: require('./enrollment-center.component.html'),
    styles: [require('./enrollment-center.component.scss')],

})
export class EnrollmentCenterComponent implements OnInit {

    private enrollmentList: EnrollmentListView[] = [];
    private viewEnrollmentList: EnrollmentListView[] = [];
    private pendingReviewList: EnrollmentListView[] = [];
    private waitList: EnrollmentListView[] = [];
    private inProcessList: EnrollmentListView[] = [];
    private unEnrolledList: EnrollmentListView[] = [];

    private assignableClasses: AssignableClassesView[];
    private statuses: EnrollmentStateView[];
    private selectedClass: string;
    private selectedStatus: EnrollmentState;
    private selection: EnrollmentListView[];
    private isLoading: boolean = false;

    constructor(private schoolService: SchoolService, private studentService: StudentService) {
        // Do stuff
        this.statuses = [
            new EnrollmentStateView('PENDING_REVIEW'),
            new EnrollmentStateView('WAITLIST'),
            new EnrollmentStateView('IN_PROCESS'),
            new EnrollmentStateView('REGISTERED')];
    }

    delete() {
        console.log('Delete: ', this.selection);
    }

    updateStatus() {
        console.log('Modify: ', this.selection, this.selectedStatus);
        let self = this;
        self.isLoading = true;
        this.studentService.updateStudentStatus(this.selection.map(el => el.studentId), this.selectedStatus)
            .subscribe(() => {
                self.isLoading = false;
                delete self.selection;
                console.log('Successfully updated student status');
                self.refreshStudentLists();
            }, err => {
                self.isLoading = false;
                console.log('Error updating student status');
            });
    }

    assignClass() {
        console.log('Modify: ', this.selection, this.selectedStatus);
        let self = this;
        self.isLoading = true;
        this.studentService.assignStudentClass(this.selection.map(el => el.studentId), this.selectedClass)
            .subscribe(() => {
                self.isLoading = false;
                delete self.selection;
                console.log('Successfully assigned student class');
                self.refreshStudentLists();
            }, err => {
                self.isLoading = false;
                console.log('Error updating student status');
            });
    }

    refreshStudentLists() {
        let self = this;

        self.isLoading = true;
        this.studentService.getEnrolledStudentsForAdmin()
            .subscribe(function (students: EnrolledStudent[]) {
                console.log('students:', students);
                self.enrollmentList = students.map(student =>
                    (new EnrollmentListView(student.firstName + ' ' + student.lastName, student.studentId,
                        new Date(student.dateOfBirth), student.enrollmentInfo.state)));
                self.pendingReviewList = self.enrollmentList.filter((student: EnrollmentListView) => (student.state === 'PENDING_REVIEW'));
                self.waitList = self.enrollmentList.filter((student: EnrollmentListView) => (student.state === 'WAITLIST'));
                self.inProcessList = self.enrollmentList.filter((student: EnrollmentListView) => (student.state === 'IN_PROCESS'));
                self.unEnrolledList = self.enrollmentList.filter((student: EnrollmentListView) => (student.state === 'UN_ENROLLED'));
                self.viewEnrollmentList = self.pendingReviewList;
                self.selectedStatus = 'PENDING_REVIEW';
                self.isLoading = false;
            }, (error) => {
                self.isLoading = false;
                console.error(error);
            });
    }

    ngOnInit() {
        console.log('Hello EnrollmentCenterComponent');
        let self = this;
        self.isLoading = true;
        this.schoolService.getClassesBySchool()
            .subscribe((classes: Class[]) => {
                self.assignableClasses = classes.map((clazz: Class) =>
                    (new AssignableClassesView(clazz.name,
                        format('%s (%d/%d)', clazz.name, clazz.fullCapacity - clazz.currentUsage, clazz.fullCapacity))));
                self.isLoading = false;
                if (classes.length > 0) {
                    self.selectedClass = self.assignableClasses[0].value;
                }
            }, err => {
                self.isLoading = false;
                console.error('Error getting classes');
            });
        this.refreshStudentLists();
    }

    setList(val) {
        if (val !== 'UN_ENROLLED') {
            this.viewEnrollmentList = this.enrollmentList.filter((student: EnrollmentListView) => (student.state === val));
        } else {

        }
    }
}

class EnrollmentListView {
    public age: string;
    constructor(
        public name: string,
        public studentId: string,
        birthdate: Date,
        public state: EnrollmentState) {
        let dayDiff: number = Math.floor((new Date().getTime() - birthdate.getTime()) / (3600 * 24 * 1000));
        let yearDiff: number = Math.floor(dayDiff / 365);
        let monthDiff: number = Math.floor((dayDiff - (yearDiff * 365)) / 30);
        // tslint:disable-next-line:no-construct
        this.age = new String(yearDiff).toString() + ' Years ' + new String(monthDiff).toString() + ' Months';
    }
}

class AssignableClassesView {
    constructor(public value: string, public label: string) { }
}

class EnrollmentStateView {
    private label: string;
    constructor(public value: EnrollmentState) {
        this.label = value.replace('_', ' ');
    }
}
