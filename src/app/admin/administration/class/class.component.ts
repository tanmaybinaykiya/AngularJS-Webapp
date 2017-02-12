import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Class, Grade, Teacher, AddClassRequest } from '../../../models';
import { SchoolService } from '../../../service';

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
    selectedGrade: Grade;
    checkboxValues: string[] = ['equalSplitPayment'];
    teachers: TeacherView[] = [];
    selectedTeachers: Teacher[] = [];
    selectedClass: SelectedClassView = new SelectedClassView();
    statusMessage: string;

    constructor(private fb: FormBuilder, private schoolService: SchoolService) {
        // Do stuff
        this.addModifyClassForm = this.fb.group({});
    }

    addClass() {
        console.log('Add Class: ', this.selectedClass, this.selectedGrade);
        let self = this;
        let addClassRequest: AddClassRequest = new AddClassRequest(this.selectedClass.name,
            this.selectedClass.teachers.map(teacher => teacher.teacherId), Number(this.selectedClass.capacity));
        this.schoolService.addClass(addClassRequest, self.selectedGrade.name)
            .subscribe((resp) => {
                console.log('Add class successful');
                this.refreshClasses();
                self.statusMessage = 'Successfully Added Class';
                setTimeout(() => { 
                    this.addClassDialogDisplay = false; 
                    delete self.statusMessage;
                }, 1500);


            }, err => {
                console.error('Error occurred while adding class');

            });
        console.log('Add Class');
    }

    refreshClasses() {
        this.getClasses();
    }

    getClasses() {
        this.schoolService.getClassesBySchool()
            .subscribe((classes: Class[]) => {
                this.classes = classes;
            }, err => {
                console.error('Error occurred getting classes: ', err)
            });
    }

    ngOnInit() {
        console.log('Hello ClassComponent');
        this.getClasses();
        this.schoolService.getAllGrades()
            .subscribe((grades: Grade[]) => {
                this.grades = grades.map(gradze => {
                    console.log('in map grades:', grades, gradze);
                    return {
                        label: gradze.name,
                        value: gradze
                    };
                });
                console.log('grades:', this.grades);
            });

        this.schoolService.getAllTeachers()
            .subscribe((teachers: Teacher[]) => {
                console.log('teachers::::', teachers);
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

class SelectedClassView {
    public name: string;
    public capacity: number;
    public teachers: Teacher[];
    constructor() { }
}
class GradeView {
    public label: string;
    public value: Grade;
    constructor() { }
}

class TeacherView {
    public label: string;
    public value: Teacher;
    constructor() { }
}