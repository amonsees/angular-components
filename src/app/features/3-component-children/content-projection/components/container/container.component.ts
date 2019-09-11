import { Component, OnInit, Input, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `
  <div class="container">
    <div class="container-header">
        <ng-content select="[header]"></ng-content>
    </div>
    <div class="container-body">
        <ng-content select="[body]"></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent {}
