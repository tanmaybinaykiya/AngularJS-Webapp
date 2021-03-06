import { ElementRef, AfterViewInit, DoCheck, EventEmitter, IterableDiffers, TemplateRef } from '@angular/core';
import { BlockableUI } from '../common/api';
export declare class DataList implements AfterViewInit, DoCheck, BlockableUI {
    protected el: ElementRef;
    value: any[];
    paginator: boolean;
    rows: number;
    totalRecords: number;
    pageLinks: number;
    rowsPerPageOptions: number[];
    lazy: boolean;
    onLazyLoad: EventEmitter<any>;
    style: any;
    styleClass: string;
    paginatorPosition: string;
    header: any;
    footer: any;
    itemTemplate: TemplateRef<any>;
    protected dataToRender: any[];
    protected first: number;
    protected page: number;
    differ: any;
    constructor(el: ElementRef, differs: IterableDiffers);
    ngAfterViewInit(): void;
    ngDoCheck(): void;
    updatePaginator(): void;
    paginate(event: any): void;
    updateDataToRender(datasource: any): void;
    isEmpty(): boolean;
    createLazyLoadMetadata(): any;
    getBlockableElement(): HTMLElement;
}
export declare class DataListModule {
}
