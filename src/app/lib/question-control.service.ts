import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor(private fb: FormBuilder) { }

    toControlGroup(question: QuestionBase<any>) {
        let group = {};
        group[question.key] = question.required ? [question.value || '', Validators.required] : [question.value || ''];
        return this.fb.group(group);
    }

    toControlGroupArray(questions: QuestionBase<any>[]) {
        let group = {};

        questions.forEach(question => {
            group[question.key] = question.required ? [question.value || '', Validators.required] : [question.value || ''];
        });
        return this.fb.group(group);
    }
}
