import { Component, OnInit, ViewChildren, ContentChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent-multi-child',
  template: `
    <div class="parent-control">
        <h2>Parent-Multi Component</h2>

        <p>@ContentChildren References:</p>
            <ng-container *ngFor="let child of children">
                Child Name = {{child?.name}}<br>
            </ng-container>

        <h3>Children Content</h3>
        <ng-content></ng-content>
    </div>
  `
})
export class ParentMultiChildComponent {
  @ContentChildren(ChildComponent) children: QueryList<ChildComponent>[];
}
