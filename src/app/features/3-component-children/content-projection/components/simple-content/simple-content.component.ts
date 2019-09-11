import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-content',
  template: `
    <div class="child-control">
      <ng-content></ng-content>
    </div>
  `
})
export class SimpleContentComponent {

}
