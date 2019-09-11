import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-simple-form-test-page',
  template: `
    <h1>Simple Template-driven Form Test</h1>

    <div class="form-group">
      <label>Customer Name</label>
      <input type="text" class="form-control" [(ngModel)]="name">
    </div>`
})
export class TemplateSimpleFormTestPageComponent {
  name: string;
}
