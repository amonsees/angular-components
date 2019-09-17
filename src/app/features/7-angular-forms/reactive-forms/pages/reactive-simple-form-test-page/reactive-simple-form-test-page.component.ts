import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-simple-form-test-page',
  template: `
  <h1>Simple Reactive Forms Test</h1>

  <div [formGroup]="formGroup">
    <div class="form-group">
      <label>Customer Name</label>
      <input type="text" class="form-control" formControlName="name">
    </div>
  </div>
  `
})
export class ReactiveSimpleFormTestPageComponent implements OnInit {
  formGroup: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      name : new FormControl('Wal-Mart', Validators.required)
    });
  }
}
