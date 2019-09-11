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

  onSubmit(form: any) {
    console.log('form', form, this.form);

    if (this.form.valid) {
      this.submittedValue = this.name
    }
  }

}
