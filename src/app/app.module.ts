import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';

@NgModule({
    imports: [BrowserModule, AppRoutes],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { };
