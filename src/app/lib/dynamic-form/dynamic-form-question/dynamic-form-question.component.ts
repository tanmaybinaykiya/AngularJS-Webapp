import { Component, Input, OnInit } from '@angular/core';
// import { ControlGroup } from '@angular/forms';
import { QuestionBase } from '../../question-base';
@Component({
    selector: 'df-question',
    template: require('./dynamic-form-question.component.html')
})
export class DynamicFormQuestionComponent implements OnInit {

    @Input() question: QuestionBase<any>;
    @Input() form: any; // ControlGroup;

    get isValid() { return true; }

    ngOnInit() {
        console.log('DynamicFormQuestionComponent', this.question);
    }
}
