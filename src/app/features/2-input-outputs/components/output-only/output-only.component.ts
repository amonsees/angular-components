import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-output-only',
  template: `
    <div class="child-control">
      <button (click)="triggerAction()">Trigger Action</button>
    </div>
  `
})
export class OutputOnlyComponent implements OnInit {
  @Output() action: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  triggerAction() {
    this.action.emit();
  }

}
