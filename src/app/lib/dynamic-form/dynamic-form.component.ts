import { Component, Input, OnInit } from '@angular/core';
// import { ControlGroup }              from '@angular/common';
import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';
import { DynamicFormQuestionComponent } from './dynamic-form-question';

@Component({
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html'),
    providers: [QuestionControlService]
})
export class DynamicFormComponent {

    @Input() questions: QuestionBase<any>[] = [];
    form: any; // ControlGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) { }

    ngOnInit() {
        this.form = this.qcs.toControlGroupArray(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
