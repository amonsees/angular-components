import { Component, OnInit, ContentChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  template: `
    <div class="parent-control">
      <h2>Parent Component</h2>

      <p>@ContentChild Reference: <br>
          Child Name = {{child?.name}}</p>

      <h3>Child Content</h3>

      <ng-content></ng-content>
    </div>
  `
})
export class ParentComponent {
  @ContentChild(ChildComponent) child: ChildComponent;
}
