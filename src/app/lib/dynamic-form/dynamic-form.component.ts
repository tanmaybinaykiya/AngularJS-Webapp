import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

import { QuestionBase } from '../question-base';
import { QuestionControlService } from '../question-control.service';

@Component({
    selector: 'dynamic-form',
    template: require('./dynamic-form.component.html'),
    providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

    @Input() questions: QuestionBase<any>[] = [];
    form: FormGroup;
    payLoad = '';

    constructor(private qcs: QuestionControlService) { }

    ngOnInit() {
        this.form = this.qcs.toControlGroupArray(this.questions);
    }

    onSubmit() {
        this.payLoad = JSON.stringify(this.form.value);
    }
}
