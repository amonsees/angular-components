import { Injectable } from '@angular/core';
import { TimerState } from '../model/timer-state.model';

@Injectable()
export class TimerService {
  timerState: TimerState;

  private intervalHandle: any;

  constructor() {
      this.init();
  }

  init() {
    this.timerState = { timerValue: 0 };
  }

  startTimer() {
    this.intervalHandle = setInterval(() => {
      this.timerState.timerValue += 0.1;
    }, 100);
  }

  stopTimer() {
    clearInterval(this.intervalHandle);
  }

  resetTimer() {
    this.timerState.timerValue = 0;
  }

}
