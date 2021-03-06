"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var core_2 = require('@angular/core');
var Header = (function () {
    function Header() {
    }
    Header = __decorate([
        core_2.Component({
            selector: 'header',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], Header);
    return Header;
}());
exports.Header = Header;
var Footer = (function () {
    function Footer() {
    }
    Footer = __decorate([
        core_2.Component({
            selector: 'footer',
            template: '<ng-content></ng-content>'
        }), 
        __metadata('design:paramtypes', [])
    ], Footer);
    return Footer;
}());
exports.Footer = Footer;
var PrimeTemplate = (function () {
    function PrimeTemplate(template) {
        this.template = template;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PrimeTemplate.prototype, "type", void 0);
    PrimeTemplate = __decorate([
        core_1.Directive({
            selector: '[pTemplate]',
            host: {}
        }), 
        __metadata('design:paramtypes', [core_1.TemplateRef])
    ], PrimeTemplate);
    return PrimeTemplate;
}());
exports.PrimeTemplate = PrimeTemplate;
var TemplateWrapper = (function () {
    function TemplateWrapper(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateWrapper.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.templateRef, {
            '\$implicit': this.item
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TemplateWrapper.prototype, "item", void 0);
    __decorate([
        core_1.Input('pTemplateWrapper'), 
        __metadata('design:type', core_1.TemplateRef)
    ], TemplateWrapper.prototype, "templateRef", void 0);
    TemplateWrapper = __decorate([
        core_1.Directive({
            selector: '[pTemplateWrapper]'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], TemplateWrapper);
    return TemplateWrapper;
}());
exports.TemplateWrapper = TemplateWrapper;
var Column = (function () {
    function Column() {
        this.sortFunction = new core_1.EventEmitter();
    }
    Column.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.type) {
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                default:
                    _this.bodyTemplate = item.template;
                    break;
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Column.prototype, "field", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Column.prototype, "header", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Column.prototype, "footer", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Column.prototype, "sortable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Column.prototype, "editable", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Column.prototype, "filter", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Column.prototype, "filterMatchMode", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Column.prototype, "rowspan", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], Column.prototype, "colspan", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Column.prototype, "style", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Column.prototype, "styleClass", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Column.prototype, "hidden", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], Column.prototype, "expander", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Column.prototype, "selectionMode", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], Column.prototype, "sortFunction", void 0);
    __decorate([
        core_1.ContentChildren(PrimeTemplate), 
        __metadata('design:type', core_1.QueryList)
    ], Column.prototype, "templates", void 0);
    __decorate([
        core_1.ContentChild(core_1.TemplateRef), 
        __metadata('design:type', core_1.TemplateRef)
    ], Column.prototype, "template", void 0);
    Column = __decorate([
        core_2.Component({
            selector: 'p-column',
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], Column);
    return Column;
}());
exports.Column = Column;
var Row = (function () {
    function Row() {
    }
    __decorate([
        core_1.ContentChildren(Column), 
        __metadata('design:type', core_1.QueryList)
    ], Row.prototype, "columns", void 0);
    Row = __decorate([
        core_2.Component({
            selector: 'p-row',
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], Row);
    return Row;
}());
exports.Row = Row;
var HeaderColumnGroup = (function () {
    function HeaderColumnGroup() {
    }
    __decorate([
        core_1.ContentChildren(Row), 
        __metadata('design:type', core_1.QueryList)
    ], HeaderColumnGroup.prototype, "rows", void 0);
    HeaderColumnGroup = __decorate([
        core_2.Component({
            selector: 'p-headerColumnGroup',
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderColumnGroup);
    return HeaderColumnGroup;
}());
exports.HeaderColumnGroup = HeaderColumnGroup;
var FooterColumnGroup = (function () {
    function FooterColumnGroup() {
    }
    __decorate([
        core_1.ContentChildren(Row), 
        __metadata('design:type', core_1.QueryList)
    ], FooterColumnGroup.prototype, "rows", void 0);
    FooterColumnGroup = __decorate([
        core_2.Component({
            selector: 'p-footerColumnGroup',
            template: ""
        }), 
        __metadata('design:paramtypes', [])
    ], FooterColumnGroup);
    return FooterColumnGroup;
}());
exports.FooterColumnGroup = FooterColumnGroup;
var ColumnBodyTemplateLoader = (function () {
    function ColumnBodyTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnBodyTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.bodyTemplate, {
            '\$implicit': this.column,
            'rowData': this.rowData,
            'rowIndex': this.rowIndex
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnBodyTemplateLoader.prototype, "column", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnBodyTemplateLoader.prototype, "rowData", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], ColumnBodyTemplateLoader.prototype, "rowIndex", void 0);
    ColumnBodyTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnBodyTemplateLoader',
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], ColumnBodyTemplateLoader);
    return ColumnBodyTemplateLoader;
}());
exports.ColumnBodyTemplateLoader = ColumnBodyTemplateLoader;
var ColumnHeaderTemplateLoader = (function () {
    function ColumnHeaderTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnHeaderTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.headerTemplate, {
            '\$implicit': this.column
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnHeaderTemplateLoader.prototype, "column", void 0);
    ColumnHeaderTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnHeaderTemplateLoader',
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], ColumnHeaderTemplateLoader);
    return ColumnHeaderTemplateLoader;
}());
exports.ColumnHeaderTemplateLoader = ColumnHeaderTemplateLoader;
var ColumnFooterTemplateLoader = (function () {
    function ColumnFooterTemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ColumnFooterTemplateLoader.prototype.ngOnInit = function () {
        var view = this.viewContainer.createEmbeddedView(this.column.footerTemplate, {
            '\$implicit': this.column
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ColumnFooterTemplateLoader.prototype, "column", void 0);
    ColumnFooterTemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-columnFooterTemplateLoader',
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], ColumnFooterTemplateLoader);
    return ColumnFooterTemplateLoader;
}());
exports.ColumnFooterTemplateLoader = ColumnFooterTemplateLoader;
var TemplateLoader = (function () {
    function TemplateLoader(viewContainer) {
        this.viewContainer = viewContainer;
    }
    TemplateLoader.prototype.ngOnInit = function () {
        if (this.template) {
            this.viewContainer.createEmbeddedView(this.template, {});
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', core_1.TemplateRef)
    ], TemplateLoader.prototype, "template", void 0);
    TemplateLoader = __decorate([
        core_2.Component({
            selector: 'p-templateLoader',
            template: ""
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef])
    ], TemplateLoader);
    return TemplateLoader;
}());
exports.TemplateLoader = TemplateLoader;
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule],
            exports: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup],
            declarations: [Header, Footer, Column, TemplateWrapper, ColumnHeaderTemplateLoader, ColumnBodyTemplateLoader, ColumnFooterTemplateLoader, PrimeTemplate, TemplateLoader, Row, HeaderColumnGroup, FooterColumnGroup]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.js.map