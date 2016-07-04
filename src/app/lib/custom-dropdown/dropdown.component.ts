import { Component, OnInit, Input, Output } from '@angular/core';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon/icon';

@Component({
    selector: 'custom-dropdown',
    directives: [MdIcon],
    providers: [MdIconRegistry],
    template: require('./dropdown.component.html'),
    styles: [require('./dropdown.component.scss')],
})
export class DropDownComponent implements OnInit {

    private static dividerSentinel: String = '#DIVIDER#';
    private _options:String[];
    @Input() options;
    @Input() placeholder: String;
    private isSelected: boolean = false;
    @Output() selectedOption: {
        value: String,
        id: String
    }

    ngOnInit() {
        var self = this;
        self._options = self.options.split(",");
        console.log('options', self._options, 'placeholder', self.placeholder);
        self.selectedOption = self.placeholder ? { value: self.placeholder, id: self.placeholder } : { value: self._options[0], id: self._options[0] };
        console.log('selectedOption', self.selectedOption);
    }

    clickHandler() {
        this.isSelected = !this.isSelected;
    }

    select(option: String) {
        this.selectedOption = { value: option, id: option };
        this.placeholder = null;
        this.isSelected = false;
    }
    isDivider(option): boolean {
        return DropDownComponent.dividerSentinel === option;
    }

}