import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
  <div class="child-control">
    Value: {{ value }}

    <button class="btn btn-success" (click)="increment()">Increment</button> <button class="btn btn-success" (click)="decrement()">Decrement</button>
  </div>
`
})
export class TwoWayBindingComponent {
  @Input() value = 0;
  @Output() valueChange: EventEmitter<number> = new EventEmitter();

  increment() {
    this.value++;

    this.valueChange.emit(this.value);
  }

  decrement() {
    this.value--;

    this.valueChange.emit(this.value);
  }
}
