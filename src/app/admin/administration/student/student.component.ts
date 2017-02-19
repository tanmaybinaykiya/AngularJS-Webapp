import { Component, OnInit } from '@angular/core';
import { EnrolledStudent, InviteParentRequest } from '../../../models';
import { StudentService, ParentService } from '../../../service';

@Component({
    selector: 'student',
    template: require('./student.component.html'),
    styles: [require('./student.component.scss')],

})
export class StudentComponent implements OnInit {

    private selectedStudent: EnrolledStudent;
    private students: EnrolledStudent[];
    private parentEmails: string;
    private inviteParentRequest: InviteParentRequest = new InviteParentRequest();

    constructor(private studentService: StudentService, private parentService: ParentService) { }

    ngOnInit() {
        console.log('Hello StudentComponent');
        this.studentService.getEnrolledStudentsForAdmin()
            .subscribe((students: EnrolledStudent[]) => {
                this.students = students;
            });
    }

    sendInvitation() {
        console.log('Add Student ');
        this.inviteParentRequest.email = this.parentEmails.split(',');
        this.parentService.inviteParent(this.inviteParentRequest)
            .subscribe(() => {
                console.log('Successfully invited parent');
            }, err => {
                console.error('Error occured: ', err);
            });
    }

    removeStudent() {
        console.log('Remove Student ', this.selectedStudent);
    }

    // sendInvitation() {
    //     console.log('Send Invitation ', this.parentsEmail);
    // }

}
