import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const RATING_VALUE_ACCESSOR: any;
export declare class Rating implements ControlValueAccessor {
    disabled: boolean;
    readonly: boolean;
    stars: number;
    cancel: boolean;
    onRate: EventEmitter<any>;
    onCancel: EventEmitter<any>;
    value: number;
    onModelChange: Function;
    onModelTouched: Function;
    protected starsArray: number[];
    protected hoverCancel: boolean;
    ngOnInit(): void;
    rate(event: any, i: number): void;
    clear(event: any): void;
    writeValue(value: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
}
export declare class RatingModule {
}
