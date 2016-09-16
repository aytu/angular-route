import {Component} from '@angular/core';
import {Params} from '@angular/router';
import {OnInit} from '@angular/core';
@Component({
  selector:'component-1',
  template:`
   <h3>Component-1</h3>
  `
})

export class Component1Component implements OnInit{
  //constructor(private _params: Params){}
  ngOnInit():any{

  }
}
