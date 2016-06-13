import { Injectable }   from '@angular/core';
import { ControlGroup, FormBuilder, Validators } from '@angular/common';
import { QuestionBase } from './question-base';

@Injectable()
export class QuestionControlService {
    constructor(private fb: FormBuilder) { }

    toControlGroup(question: QuestionBase<any>) {
        let group = {};
        group[question.key] = question.required ? [question.value || '', Validators.required] : [question.value || ''];
        return this.fb.group(group);
    }
}
