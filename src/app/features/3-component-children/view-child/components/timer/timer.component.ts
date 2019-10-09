import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <div class="child-control">
      Timer: {{ timerValue | number : '1.1-1' }}
    </div>`
})
export class TimerComponent implements OnDestroy {
  timerValue = 0;

  private interval: any;

  start() {
    this.interval = setInterval(() => {
      this.timerValue += 0.1;
    }, 100);
  }

  stop() {
    clearInterval(this.interval);
  }

  reset() {
    this.timerValue = 0;
  }

  ngOnDestroy(): void {
    this.stop();
  }
}
