import { Component, OnInit, Type } from '@angular/core';
import { CircleComponent } from '../../components/shapes/circle/circle.component';
import { ShapeBaseComponent } from '../../components/shapes/base/shape-base.component';
import { SquareComponent } from '../../components/shapes/square/square.component';
import { TriangleComponent } from '../../components/shapes/triangle/triangle.component';


@Component({
  selector: 'app-dnyamic-load-test-page',
  templateUrl: './dnyamic-load-test-page.component.html',
})
export class DnyamicLoadTestPageComponent implements OnInit {

  selectedComponent: Type<any> = CircleComponent;
  selectedColor = 'blue';

  componentInstance: ShapeBaseComponent;

  componentList = [
    {
      display: 'Circle',
      component: CircleComponent
    },
    {
      display: 'Square',
      component: SquareComponent
    },
    {
      display: 'Triangle',
      component: TriangleComponent
    },
  ];

  colorList = [
    'red',
    'green',
    'blue',
  ];

  constructor() { }

  ngOnInit() {
  }

  configureComponent(component: ShapeBaseComponent) {
    this.componentInstance = component;

    this.setComponentColor();
  }

  setComponentColor() {
    if (!this.componentInstance) {
      return;
    }

    this.componentInstance.color = this.selectedColor;

  }

}
