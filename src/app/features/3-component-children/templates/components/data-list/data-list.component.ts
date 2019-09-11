import { Component, OnInit, Input, Output, ContentChild, TemplateRef,
  AfterViewInit, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DataItemDirective } from '../../directives/data-item.directive';

@Component({
  selector: 'app-data-list',
  template: `
    <div class="row">
        <div *ngFor="let dataItem of dataItems" (click)="dataItemClick(dataItem)" [class]="itemClass">

            <ng-container *ngTemplateOutlet="dataItemTemplate; context : {$implicit: dataItem}"></ng-container>
            
        </div>
    </div>`,
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent {
  @Input() dataItems: any[];
  @Input() itemClass = 'item-class';
  @Output() selectItem: EventEmitter<any> = new EventEmitter();

  @ContentChild(DataItemDirective, {read: TemplateRef}) dataItemTemplate;

  dataItemClick(dataItem: any) {
    this.selectItem.emit(dataItem);
  }
}
