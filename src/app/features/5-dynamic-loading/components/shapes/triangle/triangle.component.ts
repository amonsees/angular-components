import { Component, OnInit } from '@angular/core';
import { ShapeBaseComponent } from '../base/shape-base.component';

@Component({
  selector: 'app-triangle',
  template: `<div class="triangle-up" [ngStyle]="style"></div>`,
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent extends ShapeBaseComponent {


  /**
   * Override the style
   */
  protected setupStyle() {
    this.style = {
      borderBottomColor: this.color
    };
  }
}
