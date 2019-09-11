import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding-test-page',
  template: `
    <h1>Two-way binding Example</h1>

    <app-two-way-binding [(value)]="value"></app-two-way-binding>

    <div>Parent Value : {{value}}</div> `
})
export class TwoWayBindingTestPageComponent {
  value = 0;
}
