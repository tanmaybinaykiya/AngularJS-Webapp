import { Component, OnInit } from '@angular/core';
import { Student } from '../../../models';
import { SchoolService } from '../../../service';

@Component({
    selector: 'student',
    template: require('./student.component.html'),
    styles: [require('./student.component.scss')],

})
export class StudentComponent implements OnInit {

    private selectedStudent: Student;
    private students: Student[];
    private parentsEmail: String;

    constructor(private schoolService: SchoolService) {
        schoolService.getAllStudents().subscribe((students: Student[]) => {
            this.students = students;
        });
    }

    ngOnInit() {
        console.log('Hello StudentComponent');
    }

    addStudent() {
        console.log('Add Student ');
    }

    removeStudent() {
        console.log('Remove Student ', this.selectedStudent);
    }

    sendInvitation() {
        console.log('Send Invitation ', this.parentsEmail);
    }

}
