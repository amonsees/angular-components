import { Component, OnInit } from '@angular/core';
import { ShapeBaseComponent } from '../base/shape-base.component';

@Component({
  selector: 'app-square',
  template: `<div class="square" [ngStyle]="style"></div>`,
  styleUrls: ['./square.component.scss']
})
export class SquareComponent extends ShapeBaseComponent {}
