import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invalid-binding-test-page',
  templateUrl: './invalid-binding-test-page.component.html'
})
export class InvalidBindingTestPageComponent {
  selectedItem = 'inputInvalidBindings';

  invalidStringValue = 45;
  invalidNumberValue = '25';
  invalidBooleanValue = 'false';
}
