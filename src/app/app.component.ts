import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES,Router} from '@angular/router';
import {Component1Component} from './component1';
import {Component2Component} from './component2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <h2>{{title}}</h2>
    <ul>
       <li ><a [routerLink]="['component1']">Component1</a></li>
       <li ><a [routerLink]="['component2']">Component2</a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  directives:[ROUTER_DIRECTIVES],
  precompile: [Component1Component, Component2Component]
})

export class AppComponent {
   title="Routing";
   constructor(router:Router) {}
}
