import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-output-test-page',
  template: `
    <h1>Output Test</h1>

    <app-output-only (action)="buttonPress()"></app-output-only>
    
    <div>Button Presses: {{buttonPresses}}</div>
  `
})
export class OutputTestPageComponent {

  buttonPresses = 0;
  
  buttonPress() {
    this.buttonPresses++;
  }
}
