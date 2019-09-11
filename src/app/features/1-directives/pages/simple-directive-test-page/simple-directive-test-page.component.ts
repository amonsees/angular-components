import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-directive-test-page',
  template: `
    <h1>Simple Directive Example</h1>

    <div appSimpleDirective>Sample Text</div>
  `
})
export class SimpleDirectiveTestPageComponent{
}
