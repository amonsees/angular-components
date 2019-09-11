import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-pill-list',
  template: `
    <span *ngFor="let item of items" class="badge" [ngClass]="{ 'badge-primary': getItemValue(item)===value, 'badge-secondary': getItemValue(item)!==value }" (click)="changeValue(item)">
      {{ getItemDisplay(item) }}
    </span>
  `,
  styles: [`
    .badge {
      margin-right: 5px;
      padding: 5px;
      cursor: pointer;
    }
  `],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PillListComponent),
    multi: true,
}]
})
export class PillListComponent implements ControlValueAccessor {
  @Input() items: any[];
  @Input() displayField = '';
  @Input() valueField = '';

  value: any;
  isDisabled = false;

  private onChange: (_: any) => void;
  private onTouch: (_: any) => void;

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  changeValue(item: any) {
    if (this.isDisabled) {
      return;
    }

    this.value = this.getItemValue(item);

    this.onChange(this.value);
  }

  getItemDisplay(item:any) {
    if (item && this.displayField) {
      return item[this.displayField];
    }

    return item;
  }

  getItemValue(item:any) {
    if (item && this.valueField) {
      return item[this.valueField];
    }

    return item;
  }
}
