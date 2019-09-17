import {
  Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.scss']
})
export class LifeCycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() message: string;

  events: { eventName: string, count: number }[] = [];

  constructor() {
    this.addEvent('constructor');
  }

  ngOnInit() {
    this.addEvent('ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addEvent('ngOnChanges');
  }

  ngDoCheck(): void {
    this.addEvent('ngDoCheck');
  }

  ngAfterViewChecked(): void {
    this.addEvent('ngAfterViewChecked');
  }

  ngAfterViewInit(): void {
    this.addEvent('ngAfterViewInit');
  }
  ngAfterContentChecked(): void {
    this.addEvent('ngAfterContentChecked');
  }
  ngAfterContentInit(): void {
    this.addEvent('ngAfterContentInit');
  }

  ngOnDestroy(): void {
    this.addEvent('ngOnDestroy');
  }

  private async addEvent(eventName: string) {
    let event = this.events.find(e => e.eventName === eventName);

    if (!event) {
      event = { eventName: eventName, count: 1 };

      this.events.push(event);
    } else {
      event.count++;
    }
  }

  clearEvents() {
    this.events.length = 0;

  }
}
