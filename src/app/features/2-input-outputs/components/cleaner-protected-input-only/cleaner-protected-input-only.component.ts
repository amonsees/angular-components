import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { booleanConverter, floatConverter, stringConverter } from '../../functions/input-converters.function';
import { InputConverter } from '../../functions/input.converter.decorator';

@Component({
  selector: 'app-cleaner-protected-input-only',
  template: `
  <div class="child-control">
    String Value : {{ stringValue }} - Type {{ getType(stringValue) }} <i *ngIf="stringChanged" class="fa fa-check">Changed</i><br>
    Number Value : {{ numberValue }} - Type {{ getType(numberValue) }} <i *ngIf="numberChanged" class="fa fa-check">Changed</i><br>
    Boolean Value : {{ booleanValue }} - Type {{ getType(booleanValue) }} <i *ngIf="booleanChanged" class="fa fa-check">Changed</i>
  </div>
`
})
export class CleanerProtectedInputOnlyComponent implements OnChanges {
  @InputConverter(stringConverter)
  @Input() stringValue: string;

  @InputConverter(floatConverter)
  @Input() numberValue: number;

  @InputConverter()
  @Input() booleanValue: boolean;

  @InputConverter(booleanConverter)
  @Input() showChanges = false;

  stringChanged = false;
  numberChanged = false;
  booleanChanged = false;

  getType(value: any) {
    return typeof value;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.showChanges) {
      return;
    }

    if (changes.stringValue && !changes.stringValue.firstChange) {
      this.stringChanged = true;
    }

    if (changes.numberValue && !changes.numberValue.firstChange) {
      this.numberChanged = true;
    }

    if (changes.booleanValue && !changes.booleanValue.firstChange) {
      this.booleanChanged = true;
    }

  }

}
