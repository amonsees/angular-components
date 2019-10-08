import { Injectable } from '@angular/core';
import { TimerState } from '../model/timer-state.model';

@Injectable()
export class TimerService {
  timerState: TimerState;

  private intervalHandle: any;

  constructor() {
      this.init();
  }

  /**
   * Initializes the timer state
   */
  init() {
    this.timerState = { timerValue: 0 };
  }

  /**
   *  Start the timer
   */
  startTimer() {
    this.intervalHandle = setInterval(() => {
      this.timerState.timerValue += 0.1;
    }, 100);
  }

  /**
   * Stop the timer
   */
  stopTimer() {
    clearInterval(this.intervalHandle);
  }

  /**
   * Reset timer to 0
   */
  resetTimer() {
    this.timerState.timerValue = 0;
  }

  /**
   * Perform any service cleanup
   */
  destroy() {
    this.stopTimer();
  }

}
