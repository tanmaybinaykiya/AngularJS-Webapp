import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RegisterComponent } from './register.component';
import { ButtonModule, PasswordModule, InputTextModule } from '../lib/primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        PasswordModule,
        InputTextModule
    ],
    declarations: [
        RegisterComponent
    ],
    bootstrap: [RegisterComponent]
})
export class RegisterAppModule { }
