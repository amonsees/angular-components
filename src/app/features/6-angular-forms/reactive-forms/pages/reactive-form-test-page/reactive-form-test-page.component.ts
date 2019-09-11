import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, AbstractControl } from '@angular/forms';
import { CustomerStatus } from '../../../template-forms/models/customer.status.enum';
import { Customer } from '../../../template-forms/models/customer.model';

@Component({
  selector: 'app-reactive-form-test-page',
  templateUrl: './reactive-form-test-page.component.html',
  styleUrls: ['./reactive-form-test-page.component.scss']
})
export class ReactiveFormTestPageComponent implements OnInit {
  customerFG: FormGroup;
  submittedCustomer: Customer = null;

  submitted = false;

  get name(): AbstractControl {
    return this.customerFG.get('name');
  }

  ngOnInit() {
    this.customerFG = new FormGroup({
      name: new FormControl(null, Validators.required),
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.customerFG.valid) {
      this.submittedCustomer = this.customerFG.value;
    }
  }

}
