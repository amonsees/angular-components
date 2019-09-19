import { Component, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../models/customer.model';
import { CustomerStatus } from '../../models/customer.status.enum';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form-test-page',
  templateUrl: './template-form-test-page.component.html',
  styleUrls: ['./template-form-test-page.component.scss']
})
export class TemplateFormTestPageComponent {
  name: string;

  submittedValue: string;

  @ViewChild(NgForm) form: NgForm;

  onSubmit() {
    if (this.form.valid) {
      this.submittedValue = this.name
    }
  }

}
