import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Class, Grade, Teacher } from '../../../models';
import { SchoolService } from '../../../service';

interface GradeView {
    label: string;
    value: Grade;
}

interface TeacherView {
    label: string;
    value: Teacher;
}

@Component({
    selector: 'class',
    template: require('./class.component.html'),
    styles: [require('./class.component.scss')]
})

export class ClassComponent implements OnInit {

    addModifyClassForm: FormGroup;
    addClassDialogDisplay: boolean = false;
    classes: Class[];
    selection: Class[] = [];
    removeSchoolDialogDisplay: boolean = false;
    addSchoolDialogDisplay: boolean = false;
    grades: GradeView[] = [];
    selectedGrade: GradeView;
    checkboxValues: string[] = [];
    teachers: TeacherView[] = [];
    selectedTeachers: Teacher[] = [];

    constructor(private fb: FormBuilder, private schoolService: SchoolService) {
        // Do stuff
        this.addModifyClassForm = this.fb.group({});
    }

    addClass() {
        console.log('Add Class');
        this.addClassDialogDisplay = false;
    }

    ngOnInit() {
        console.log('Hello ClassComponent');
        this.schoolService.getClassesBySchool()
            .subscribe((classes: Class[]) => {
                this.classes = classes;
            }, err => {
                console.error('Error occurred getting classes: ', err)
            });

        this.schoolService.getAllGrades().subscribe((grades: Grade[]) => {
            this.grades = grades.map(gradze => {
                console.log('in map grades:', grades, gradze);
                return {
                    label: gradze.name,
                    value: gradze
                };
            });
            console.log('grades:', this.grades);
        });

        this.schoolService.getAllTeachers().subscribe((teachers: Teacher[]) => {
            this.teachers = teachers.map(teacherz => {
                console.log('in map grades:', teachers, teacherz);
                return {
                    label: teacherz.name,
                    value: teacherz
                };
            });
            console.log('teachers:', this.teachers);
        });
    }

    get diagnostic() {
        return JSON.stringify(this.addModifyClassForm);
    }

}
