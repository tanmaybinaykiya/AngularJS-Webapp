import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-menu',
    template: require('./dropdown.component.html'),
    styles: [require('./dropdown.component.scss')]
})
export class DropDownMenuComponent implements OnInit {

    @Input('label') label: String ;//= "tempLabel";
    @Input('items') items: Array<String>;// = ["Item 1","Item 2","Item 3","Item 4"];
    // selectedItem:  String = items[0]; 

    constructor() {
    }

    ngOnInit() {
        console.log('DropDownMenuComponent', this.label, this.items);
    }

}
