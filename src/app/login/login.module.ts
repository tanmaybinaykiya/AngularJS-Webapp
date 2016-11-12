import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { ButtonModule, PasswordModule, InputTextModule } from '../lib/primeng/primeng';

@NgModule({
    imports: [
        BrowserModule,
        ButtonModule,
        PasswordModule,
        InputTextModule
    ],
    declarations: [
        LoginComponent
    ],
    bootstrap: [LoginComponent]
})
export class LoginAppModule { }
