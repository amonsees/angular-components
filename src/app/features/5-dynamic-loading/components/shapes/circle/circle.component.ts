import { Component, OnInit } from '@angular/core';
import { ShapeBaseComponent } from '../base/shape-base.component';

@Component({
  selector: 'app-circle',
  template: `<div class="circle" [ngStyle]="style"></div>`,
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent extends ShapeBaseComponent implements OnInit {

  constructor() {
    super();
   }

  ngOnInit() {
    // Always remeber to call super when overriding methods
    super.ngOnInit();
  }

}
