import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { ComponentChildrenFeatureRoutingModule } from './component-children-feature-routing.module';

import { ReferenceChildTestPageComponent } from './view-child/pages/reference-child-test-page/reference-child-test-page.component';
import { ViewChildTestPageComponent } from './view-child/pages/view-child-test-page/view-child-test-page.component';
import { ConentChildTestPageComponent } from './content-child/pages/conent-child-test-page/conent-child-test-page.component';
import { ContentProjectionTestPageComponent } from './content-projection/pages/content-projection-test-page/content-projection-test-page.component';
import { TemplateTestPageComponent } from './templates/pages/template-test-page/template-test-page.component';

import { SimpleContentComponent } from './content-projection/components/simple-content/simple-content.component';
import { ContainerComponent } from './content-projection/components/container/container.component';
import { DataListComponent } from './templates/components/data-list/data-list.component';
import { DataItemDirective } from './templates/directives/data-item.directive';
import { ParentComponent } from './content-child/components/parent/parent.component';
import { ChildComponent } from './content-child/components/child/child.component';
import { ParentMultiChildComponent } from './content-child/components/parent-multi-child/parent-multi-child.component';
import { TimerComponent } from './view-child/components/timer/timer.component';


@NgModule({
  declarations: [
    // Components
    ParentComponent,
    ChildComponent,
    ParentMultiChildComponent,
    TimerComponent,
    ContainerComponent,
    DataListComponent,
    DataItemDirective,
    SimpleContentComponent,

    // Pages
    ReferenceChildTestPageComponent,
    ViewChildTestPageComponent,
    ConentChildTestPageComponent,
    ContentProjectionTestPageComponent,
    TemplateTestPageComponent
  ],
  imports: [
    ComponentChildrenFeatureRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ReferenceChildTestPageComponent,
    ViewChildTestPageComponent,
    ConentChildTestPageComponent,
    ContentProjectionTestPageComponent,
    TemplateTestPageComponent
  ],
  entryComponents: [
    ReferenceChildTestPageComponent,
    ViewChildTestPageComponent,
    ConentChildTestPageComponent,
    ContentProjectionTestPageComponent,
    TemplateTestPageComponent
  ]
})
export class ComponentChildrenFeatureModule { }
