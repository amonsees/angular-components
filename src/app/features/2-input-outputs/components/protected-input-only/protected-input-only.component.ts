import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { stringConverter, booleanConverter, intConverter } from '../../functions/input-converters.function';

@Component({
  selector: 'app-protected-input-only',
  template: `
    <div class="child-control">
      String Value : {{ stringValue }} - Type {{ getType(stringValue) }}<br>
      Number Value : {{ numberValue }} - Type {{ getType(numberValue) }}<br>
      Boolean Value : {{ booleanValue }} - Type {{ getType(booleanValue) }}
    </div>
  `
})
export class ProtectedInputOnlyComponent {
  private _stringValue: string;
  private _booleanValue: boolean;
  private _numberValue: number;

  @Input() get stringValue(): string {
    return this._stringValue;
  }
  set stringValue(value: string) {
    this._stringValue = stringConverter(value);
  }

  @Input() get booleanValue(): boolean {
    return this._booleanValue;
  }
  set booleanValue(value: boolean) {
    this._booleanValue = booleanConverter(value);
  }

  @Input() get numberValue(): number {
    return this._numberValue;
  }
  set numberValue(value: number) {
    this._numberValue = intConverter(value);
  }

  getType(value: any) {
    return typeof value;
  }
}
