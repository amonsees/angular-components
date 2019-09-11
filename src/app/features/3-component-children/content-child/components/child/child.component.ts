import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <div class="child-control">
      Child: {{ name }}
    </div>
  `,
})
export class ChildComponent {
  @Input() name: string;
}
