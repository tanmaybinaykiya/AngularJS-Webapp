import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Class, Grade, Teacher, AddClassRequest, AddGradeRequest } from '../../../models';
import { SchoolService } from '../../../service';

@Component({
    selector: 'class',
    template: require('./class.component.html'),
    styles: [require('./class.component.scss')]
})

export class ClassComponent implements OnInit {

    addModifyClassForm: FormGroup;

    addClassDialogDisplay: boolean = false;
    removeClassDialogDisplay: boolean = false;
    addSchoolDialogDisplay: boolean = false;
    addGradeDialogDisplay: boolean = false;

    // selections
    selectedClasses: Class[] = [];
    selectedGrades: GradeView[] = [];

    // on init
    classes: Class[];
    teachers: TeacherView[] = [];
    grades: ClassGradeView[] = [];
    originalGrades: GradeView[];

    // class creation
    createClass: SelectedClassView = new SelectedClassView();
    selectedGrade: Grade;
    checkboxValues: string[] = ['equalSplitPayment'];
    selectedTeachers: Teacher[] = [];
    statusMessage: string;

    // grade creation
    createGrade: GradeCreationView = new GradeCreationView();

    constructor(private fb: FormBuilder, private schoolService: SchoolService) {
        // Do stuff
        this.addModifyClassForm = this.fb.group({});
    }

    addClass() {
        console.log('Add Class: ', this.createClass, this.selectedGrade);
        let self = this;
        let addClassRequest: AddClassRequest = new AddClassRequest(this.createClass.name,
            this.createClass.teachers.map(teacher => teacher.teacherId), Number(this.createClass.capacity));
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

    refreshGrades() {
        this.getGrades();
    }

    getClasses() {
        this.schoolService.getClassesBySchool()
            .subscribe((classes: Class[]) => {
                this.classes = classes;
            }, err => {
                console.error('Error occurred getting classes: ', err)
            });
    }

    getGrades() {
        let self = this;
        this.schoolService.getAllGrades()
            .subscribe((grades: Grade[]) => {
                console.log('Got grades: ', grades);
                self.grades = grades.map(grade => ({
                    label: grade.name,
                    value: grade
                }));
                self.originalGrades = grades.map(grade => new GradeView(grade));
                console.log('grades:', this.grades);
            });
    }

    ngOnInit() {
        console.log('Hello ClassComponent');
        this.getClasses();
        this.getGrades();
        let self = this;
        this.schoolService.getAllTeachers()
            .subscribe((teachers: Teacher[]) => {
                console.log('teachers::::', teachers);
                self.teachers = teachers.map(teacher => {
                    return {
                        label: teacher.name,
                        value: teacher
                    };
                });
                console.log('teachers:', this.teachers);
            });
    }

    get diagnostic() {
        return JSON.stringify(this.addModifyClassForm);
    }

    removeClass() {
        console.log('Remove Class');
    }

    deleteClassDialog(event) {
        console.log('Event: ', event)
        this.removeClassDialogDisplay = true;
    }

    addGrade() {
        console.log('Add Grade: ', this.createGrade);
        let self = this;
        let addGradeRequest: AddGradeRequest = new AddGradeRequest(
            this.createGrade.name,
            this.createGrade.tuitionFee,
            this.createGrade.planId, {
                days: bitMapper(this.createGrade.gradeDayCheckboxValues),
                from: this.createGrade.fromTime,
                to: this.createGrade.toTime
            }, {
                age: this.createGrade.minimumAge,
                validationDate: this.createGrade.validationDate
            });
        self.schoolService.addGrade(addGradeRequest)
            .subscribe((resp) => {
                console.log('Successfully added grade: ', resp);
                self.refreshGrades();
                self.statusMessage = 'Successfully added grade';
                setTimeout(() => {
                    delete self.statusMessage;
                    self.addGradeDialogDisplay = false;
                }, 1500);
            }, (err) => {
                console.log('Error adding Grade: ', err);
            });
    }

}

class SelectedClassView {
    public name: string;
    public capacity: number;
    public teachers: Teacher[];
    constructor() { }
}

// used by class for drop down and other busineess
class ClassGradeView {
    public label: string;
    public value: Grade;
    constructor() { }
}

class TeacherView {
    public label: string;
    public value: Teacher;
    constructor() { }
}

function bitMapper(dayMap: string[]): string {
    let dayArr: string[] = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
    let bitMap: string = '';
    for (let i = 0; i < 7; i++) {
        let nextChar = (dayMap.indexOf(dayArr[i]) > -1) ? '1' : '0';
        bitMap = bitMap.concat(nextChar);
    }
    return bitMap;
}

function daysMapper(bitMap: string): string {
    console.log('daysMapper: ', bitMap);
    if (bitMap.length !== 7) {
        return 'Invalid Input from server';
    } else {
        // tslint:disable-next-line:no-inferrable-types
        let mappedString: string = '';
        let bitArr: string[] = bitMap.split('');
        let dayArr: string[] = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
        for (let i = 0; i < bitArr.length; i++) {
            if (bitArr[i] === '1') {
                mappedString = mappedString.concat(dayArr[i] + ',');
            }
        }
        console.log('return: ', mappedString.slice(0, -1));
        return mappedString;
    }
};

class GradeCreationView {
    name: string;
    tuitionFee: number;
    planId: string;
    days: string;
    hours: string;
    minimumAge: number;
    validationDate: Date;
    fromTime: Date;
    toTime: Date;
    gradeDayCheckboxValues: string[] = [];
    constructor() { }
}

class GradeView extends GradeCreationView {
    constructor(grade?: Grade) {
        super();
        this.name = grade ? grade.name : '';
        this.tuitionFee = grade ? grade.tuitionFee : 0;
        this.planId = grade ? grade.planId : '';
        this.days = grade ? daysMapper(grade.duration.days) : '';
        this.hours = grade ? (new Date(grade.duration.from).toDateString() + ' - ' + new Date(grade.duration.to).toDateString()) : '';
        this.minimumAge = grade ? grade.minimumAgeCriterion.age : 0;
        this.validationDate = grade ? grade.minimumAgeCriterion.validationDate : new Date();
    }
}
