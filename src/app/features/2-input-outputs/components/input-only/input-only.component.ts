import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input-only',
  template: `
  <div class="child-control">
    String Value : {{ stringValue }} - Type {{ getType(stringValue) }}<br>
    Number Value : {{ numberValue }} - Type {{ getType(numberValue) }}<br>
    Boolean Value : {{ booleanValue }} - Type {{ getType(booleanValue) }}
  </div>

  `
})
export class InputOnlyComponent {
  @Input() stringValue: string;
  @Input() booleanValue: boolean;
  @Input() numberValue: number;

  getType(value: any) {
    return typeof value;
  }

}
