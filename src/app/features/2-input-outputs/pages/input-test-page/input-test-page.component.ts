import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-test-page',
  templateUrl: './input-test-page.component.html',
})
export class InputTestPageComponent {
  selectedItem = 'inputAngularBinding';

  stringValue = 'This is a String';
  numberValue = 25;
  booleanValue = false;

  value = 4;
}
