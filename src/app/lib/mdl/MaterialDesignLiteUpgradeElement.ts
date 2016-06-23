// solution http://stackoverflow.com/questions/34421919/integrating-material-design-lite-with-angular2/35451821#35451821
import { Directive, AfterViewInit } from '@angular/core';
declare var componentHandler: any;

@Directive({
    selector: '[mdl]'
})
export class MDLDirective implements AfterViewInit {
    ngAfterViewInit() {
        componentHandler.upgradeAllRegistered();
    }
}
