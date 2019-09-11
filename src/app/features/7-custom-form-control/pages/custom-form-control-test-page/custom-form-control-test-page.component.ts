import { Component, OnInit } from '@angular/core';
import { CustomerStatus } from 'src/app/features/6-angular-forms/template-forms/models/customer.status.enum';

@Component({
  selector: 'app-custom-form-control-test-page',
  template: `
    <h1>Custom Form Control Example</h1>

    <app-pill-list [(ngModel)]="status" [items]="statusList"></app-pill-list>

    value: {{status}}
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
