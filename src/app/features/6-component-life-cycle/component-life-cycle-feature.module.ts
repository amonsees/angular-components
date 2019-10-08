import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentLifeCycleFeatureRoutingModule } from './component-life-cycle-feature-routing.module';

import { LifeCycleTestPageComponent } from './pages/life-cycle-test-page/life-cycle-test-page.component';

import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';

@NgModule({
  declarations: [
      LifeCycleComponent,

      LifeCycleTestPageComponent
  ],
  imports: [
    ComponentLifeCycleFeatureRoutingModule,
    CommonModule,
    FormsModule,
  ],
  exports: [
    LifeCycleTestPageComponent
  ],
  entryComponents: [
    LifeCycleTestPageComponent
  ]
})
export class ComponentLifeCycleFeatureModule { }
