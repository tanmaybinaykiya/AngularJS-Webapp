import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

import { SchoolService } from './shared';
import { LoginComponent } from './login';
import { ParentComponent } from './parent';

import '../style/app.scss';


/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'my-secureslice', // <my-app></my-app>
  providers: [SchoolService],
  directives: [...ROUTER_DIRECTIVES, ...MD_SIDENAV_DIRECTIVES, ...MD_LIST_DIRECTIVES, ...MD_TOOLBAR_DIRECTIVES],
  template: require('./app.component.html'),
  styles: [require('./app.component.scss')],
})
@RouteConfig([
  {path: '/Login', component: LoginComponent, name: 'Login' , useAsDefault: true},
  {path: '/Parent/...', component: ParentComponent, name: 'Parent'}
])
export class AppComponent {
  url = 'https://github.com/preboot/angular2-webpack';

  constructor(private school: SchoolService) {
  }
}
