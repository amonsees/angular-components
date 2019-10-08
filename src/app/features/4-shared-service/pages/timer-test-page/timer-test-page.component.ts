import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer-test-page',
  template: `
      <h1>Shared Service Test</h1>

      <app-timer-controls></app-timer-controls>

      Parent Timer value: {{ timerService.timerState.timerValue | number : '1.1-1' }}<br><br>

      <button (click)="timerService.startTimer()" class="btn btn-success">Start</button>
      <button (click)="timerService.stopTimer()" class="btn btn-success">Stop</button>
      <button (click)="timerService.resetTimer()" class="btn btn-success">Reset</button>

      <br>
      <h2>Independant Timer</h2>

      <app-independant-timer-controls></app-independant-timer-controls>
  `,
  providers: [
    TimerService
  ]
})
export class TimerTestPageComponent implements OnDestroy {
  constructor(public timerService: TimerService) { }

  ngOnDestroy(): void {
    // Need to clean up the resources on the timer
    this.timerService.destroy();
  }
}
