import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-form-control-test-page',
  template: `
    <h1>Custom Form Control Example</h1>

    <app-pill-list [(ngModel)]="status" [items]="statusList"></app-pill-list>

    <p>Value: {{status}}</p>
  `
})
export class CustomFormControlTestPageComponent {
  status: string;

  statusList = [
    'New',
    'Active',
    'Inactive'
  ];
}
