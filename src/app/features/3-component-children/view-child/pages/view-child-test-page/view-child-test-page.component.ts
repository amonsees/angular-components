import { Component, OnInit, ViewChild } from '@angular/core';
import { TimerComponent } from '../../components/timer/timer.component';

@Component({
  selector: 'app-view-child-test-page',
  template: `
      <h1>View Child Test</h1>

      <app-timer></app-timer>

      <button (click)="startTimer()" class="btn btn-success">Start</button>
      <button (click)="stopTimer()" class="btn btn-success">Stop</button>
      <button (click)="resetTimer()" class="btn btn-success">Reset</button>
  `
})
export class ViewChildTestPageComponent {
  @ViewChild(TimerComponent) timer: TimerComponent;

  startTimer() {
    this.timer.start();
  }

  stopTimer() {
    this.timer.stop();
  }

  resetTimer() {
    this.timer.reset();
  }

}
