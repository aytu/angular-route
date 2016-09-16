import {RouterConfig,provideRouter} from '@angular/router';
import {Component1Component} from './component1';
import {Component2Component} from './component2';

export const routes: RouterConfig = [
    {path: '',component: Component1Component},
    {path: 'component1', component: Component1Component},
    {path: 'component2', component: Component2Component}
];
export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];
