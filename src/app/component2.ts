import {Component} from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector:'component-2',
  template:`
   <h1>This is Component-2</h1>
   <button (click)="onNavigate()">Take me Component1</button>
  `
})

export class Component2Component{
  constructor(private _router: Router){}
  onNavigate(){
    console.log("navigate");
    this._router.navigateByUrl('/component1');
    //this._router.navigate(['component1']);
  }
}
