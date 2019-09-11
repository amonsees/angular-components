import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reference-child-test-page',
  template: `
    <h1>Reference Child Test</h1>

    <app-timer #timer></app-timer>

    <button (click)="timer.start()" class="btn btn-success">Start</button>
    <button (click)="timer.stop()" class="btn btn-success">Stop</button>
    <button (click)="timer.reset()" class="btn btn-success">Reset</button>
  `
})
export class ReferenceChildTestPageComponent {}
