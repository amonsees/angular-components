import { Component, OnInit } from '@angular/core';
import { DataItem } from '../../models/data-item.model';

@Component({
  selector: 'app-template-test-page',
  template: `
  <h1>Template Test - Data List</h1>

  <app-data-list [dataItems]="dataItems" (selectItem)="selectItem($event)">

      <ng-container *dataItem="let item">
          <b>{{ item.title }}</b>
      </ng-container>
      
  </app-data-list>

  <div *ngIf="selectedItem">
      Selected: {{ selectedItem.title }}
  </div>
  `
})
export class TemplateTestPageComponent implements OnInit {
  dataItems: DataItem[] = [];

  selectedItem: DataItem;

  ngOnInit() {
    this.buildItems();
  }

  private buildItems() {
    for (let i = 1; i <= 24; i++) {

      this.dataItems.push({
        title: `Item ${i}`
      });
    }
  }

  selectItem(item: DataItem) {
    this.selectedItem = item;
  }
}
