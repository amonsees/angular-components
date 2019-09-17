import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-timer-controls',
  template: `
  <div class="child-control">
    Child Timer value: {{ timerService.timerState.timerValue | number : '1.1-1' }}<br><br>

    <button (click)="timerService.startTimer()" class="btn btn-success">Start</button>
    <button (click)="timerService.stopTimer()" class="btn btn-success">Stop</button>
    <button (click)="timerService.resetTimer()" class="btn btn-success">Reset</button>
  </div>
  `,
})
export class TimerControlsComponent {

  constructor(public timerService: TimerService) { }

}
