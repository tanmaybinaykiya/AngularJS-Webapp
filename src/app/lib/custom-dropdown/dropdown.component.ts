import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: 'custom-dropdown',
    viewProviders: [MdIconRegistry],
    template: require('./dropdown.component.html'),
    styles: [require('./dropdown.component.scss')],
})
export class DropDownComponent implements OnInit {

    private static dividerSentinel: String = '#DIVIDER#';
    private _options: string[];
    @Input() options;
    @Input() placeholder: string;
    private isSelected: boolean = false;
    private selectedOption: DropdownValue;
    @Output() selectedOptionEvent = new EventEmitter();

    ngOnInit() {
        let self = this;
        self._options = self.options.split(',');
        console.log('options', self._options, 'placeholder', self.placeholder);
        self.selectedOption = self.placeholder ? new DropdownValue(self.placeholder, self.placeholder) :
            new DropdownValue(self._options[0], self._options[0]);
        console.log('selectedOption', self.selectedOption);
    }

    clickHandler() {
        this.isSelected = !this.isSelected;
    }

    select(option: string) {
        this.selectedOption = new DropdownValue(option, option);
        this.placeholder = null;
        this.isSelected = false;
        this.selectedOptionEvent.emit(option);
    }
    isDivider(option): boolean {
        return DropDownComponent.dividerSentinel === option;
    }

}

export class DropdownValue {
    value: string;
    label: string;

    constructor(value: string, label: string) {
        this.value = value;
        this.label = label;
    }
}
